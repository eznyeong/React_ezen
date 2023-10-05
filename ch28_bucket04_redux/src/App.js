import React from "react";
import { createGlobalStyle } from "styled-components";
import BucketsContainers from "./containers/BucketsContainers";

const GlobalStyle = createGlobalStyle`
  * { padding: 0; margin: 0; }
  body { background-color: #e9ecef; }
  li{ list-style: none; }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      {/* 컨테이너 컴포넌트 호출 */}
      <BucketsContainers/>
    </>
  );
}

export default App;
