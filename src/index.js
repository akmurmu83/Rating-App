import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Create or extend your Chakra UI theme
const theme = extendTheme({
  colors: {
    primary: {
      500: "teal", // Customize the primary color
    },
    fontSize: {
      sm: "16px",
      md: "25px",
      lg: "40px",
    },
    breakpoints: {
      base: "0em", // 0px
      sm: "30em", // 480px
      md: "48em", // 768px
      lg: "62em", // 992px
      xl: "80em", // 1280px
    },
  },
  fonts: {
    body: "Roboto, sans-serif", // Customize the body font
  },
  // Additional theme configuration goes here
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
