import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Tech from "./pages/Tech";

// const datas = () => {
//   fetch("/api").then((result) => {
//     console.log("oi", result);
//   });
// };

function App() {
  return (
    <div>
      <GlobalStyle />

      <Nav />

      <Main />
    </div>
  );
}

export default App;
