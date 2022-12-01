import { useState, useEffect } from 'react';

export const TransactionContext = React.createContext();

let eth

if (typeof window !== 'undefined') {
  eth = window.ethereum
}

const connectWallet = async (metamask = eth) => { 
  try {
    if (!metamask) {
      return alert ('Please install metamask')
    }

    const accounts = await metamask.request({ method: 'eth_requestAccounts' })
  } catch (error) {
    
  }
}