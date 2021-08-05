import React from "react";

import GlobalStyle from "./components/GlobalStyle";

import Main from "./pages/Main";

// const datas = () => {
//   fetch("/api").then((result) => {
//     console.log("oi", result);
//   });
// };

function App() {
  return (
    <div>
      <GlobalStyle />
      <Main />
    </div>
  );
}

export default App;
