import "../styles/globals.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import customTheme from "../components/global/customTheme";
// import { Provider } from 'react-redux';
// import {store, persistor} from '../redux/store';
// import AuthWrapper from '../utility/authWrapper';
// import { PersistGate } from 'redux-persist/integration/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />

      <Component {...pageProps} />

      {/* <Component {...pageProps} /> */}
    </ChakraProvider>
  );
}

export default MyApp;
