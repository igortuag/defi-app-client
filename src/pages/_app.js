import "../styles/globals.css";

import {TransactionContextProvider} from "../context/TransactionContext";

function MyApp({ Component, pageProps }) {
  return (
    <TransactionContextProvider>
      <Component {...pageProps} />
    </TransactionContextProvider>
  );
}

export default MyApp;
