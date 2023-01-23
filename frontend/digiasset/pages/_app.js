import { ChakraProvider } from "@chakra-ui/react";
import Web3ContextProvider from "../contexts/Web3Context";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
        <Web3ContextProvider>
      <Component {...pageProps} />
      </Web3ContextProvider>
    </ChakraProvider>
    
  );
}

export default MyApp;
