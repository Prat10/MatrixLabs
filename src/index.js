import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./utils/theme";
import "../src/styles.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
