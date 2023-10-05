import React from "react";
import BestBox from "./components/BestBox";
import Title from "./components/Title";
import Product from "./components/Product"; //페이지를 이룰 컴포넌트 생성하세요.
import { BestProvider } from "./BestContext";
import { createGlobalStyle } from "styled-components";

//라우터 라이브러리 호출
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//BrowserRouter : 라우터 종류 중 하나 - 웹에서 가장 많이 사용하는 형태
//Routes : 페이지 이동이 일어나는 컴포넌트들을 감싸는 컴포넌트
//Route : 페이지 이동이 있는 컴포넌트를 한개한개 담아 주소를 처리해주는 컴포넌트


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
    <BrowserRouter>
      <BestProvider>
        <GlobalStyle />
        {/* 페이지 이동시 고정 */}
        <Title name="BEST PRODUCT" />
        <Routes>
          {/* 페이지 변환이 일어나는 구역 */}
          {/* path속성은 경로, /는 루트경로 */}
          <Route path="/" element={<BestBox />} />
          <Route path="/:bestId" element={<Product />} />
        </Routes>
      </BestProvider>
    </BrowserRouter>
  );
}

export default App;
