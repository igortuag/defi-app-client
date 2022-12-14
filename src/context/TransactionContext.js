import { useState, useEffect } from "react";

export const TransactionContext = React.createContext();

let eth;

if (typeof window !== "undefined") {
  eth = window.ethereum;
}

export const TransactionContextProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
  });

  const connectWallet = async (metamask = eth) => {
    try {
      if (!metamask) {
        return alert("Please install metamask");
      }

      const accounts = await metamask.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {}
  };

  const checkIfWalletIsConnected = async (metamask = eth) => {
    try {
      if (!metamask) {
        return alert("Please install metamask");
      }

      const accounts = await metamask.request({
        method: "eth_accounts",
      });

      if (accounts.length !== 0) {
        setCurrentAccount(accounts[0]);
      }
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };

  const sendTransaction = async (
    metamask = eth,
    connectedAccount = currentAccount
  ) => {
    try {
      if (!metamask) {
        return alert("Please install metamask");
      }
      setIsLoading(true);
      const { addressTo, amount } = formData;
      const transactionContract = getEthereumContract();

      const parsedAmount = ethers.utils.parseEther(amount);

      await metamask.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: connectedAccount,
            to: addressTo,
            gas: "0x76c0", // 30400
            value: parsedAmount._hex,
          },
        ],
      });

      const transaction = await transactionContract.publishTransaction(
        addressTo,
        parsedAmount,
        `Transaction to ${addressTo} for ${amount} ETH`,
        "TRANSFER"
      );

      await transaction.wait();

      await saveTransaction(
        transactionHash.hash,
        amount,
        connectedAccount,
        addressTo
      );
    } catch (error) {
      console.error(error);
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e, name) => {
    setFormData({
      ...formData,
      [name]: e.target.value,
    });
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        currentAccount,
        connectWallet,
        sendTransaction,
        handleChange,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
