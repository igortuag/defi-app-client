import { useState, useEffect } from "react";

export const TransactionContext = React.createContext();

let eth;

if (typeof window !== "undefined") {
  eth = window.ethereum;
}

export const TransactionContextProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(null);

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
    connectedAccount = currentAccount,
  ) => { 
    try {
      if (!metamask) {
        return alert("Please install metamask");
      }
      const { addressTo, amount } = formData
      const transactionContract = getEthereumContract()

      const parsedAmount = ethers.utils.parseEther(amount)

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

    } catch (error) { 
      console.error(error);
      throw new Error(error);
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ currentAccount, connectWallet }}>
      {children}
    </TransactionContext.Provider>
  );
};
