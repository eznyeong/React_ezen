import React from 'react';
// import { Routes, Route } from 'react-router-dom';

//자손 컴포넌트 호출
import Header from './components/common/Header';

//스타일 지정 - 공통 CSS작성 (createGlobalStyle컴포넌트 사용)
import styled, { createGlobalStyle } from 'styled-components';

//스타일 컴포넌트는 첫 글자가 대문자
const GlobalStyle = createGlobalStyle`
  * { padding: 0;  margin: 0; color: #fff; font-family: 'Noto Sans KR', sans-serif; box-sizing: border-box; }
  body { background: lightblue; height: 3000px;}
  li { list-style: none; }
  a { text-decoration: none; }
`;

const BodyBlock = styled.div`
  width: 100%;
  overflow: hidden;
`;

function App() {

  return(
    <BodyBlock>
      <GlobalStyle />
      {/* 페이지 이동이 없을 시 Header 지정 */}
      <Header />
        {/* <Routes> */}
        {/* 페이지 이동이 있을 시 이쪽에 처리 */}
        {/* </Routes> */}
      {/* 페이지 이동이 없을 시 Footer 지정 */}
    </BodyBlock>
  )

}

export default App;