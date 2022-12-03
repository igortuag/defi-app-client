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

  useEffect(() => {
    connectWallet();
  }, []);

  const checkIfWalletIsConnected = async (metamask = eth) => {
    try {
      if (!metamask) {
        return alert("Please install metamask");
      }

      const accounts = await metamask.request({
        method: "eth_accounts",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TransactionContext.Provider value={{ currentAccount, connectWallet }}>
      {children}
    </TransactionContext.Provider>
  );
};
