import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
/* import { ColorModeSwitcher } from "./ColorModeSwitcher"; */
import { BrowserRouter as Router } from "react-router-dom";
import RouteCmp from "./routes";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <RouteCmp />
    </Router>
  </ChakraProvider>
);
