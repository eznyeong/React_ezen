import React from "react";
import Title from "./components/Title";
import BestBox from "./components/BestBox";
import Product from "./components/Product"; //페이지를 이룰 컴포넌트 생성하세요.
import { BestProvider } from "./BestContext";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

//전역에서 사용할 CSS를 작성
//styled에서는 변수명 첫글자 대문자 처리 - 컴포넌트화하기 때문
const GlobalStyle = createGlobalStyle`
  *{ padding: 0; margin: 0; color: #fff; }
  body{ background-color: #000; }

  li{ list-style: none; }
  a{ text-decoration: none; }
`;

function App() {

  return (
      <BestProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Link to="/">
            <Title name="BEST PRODUCT" />
          </Link>
          <Routes >
            <Route path="/" element={<BestBox />} />
            <Route path="/:id" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </BestProvider>
  );
}

export default App;
