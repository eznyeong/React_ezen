import React from 'react';
import BestsContainers from './containers/BestsContainers';

//전역스타일 컴포넌트 호출
import { createGlobalStyle } from 'styled-components';

//전역 스타일 컴포넌트 생성
const GlobalStyle = createGlobalStyle`
  *{ padding: 0; margin: 0; color: #fff; }
  body{ background-color: #000; }

  li{ list-style: none; }
  a{ text-decoration: none; }
`;


function App() {
  return(
    /* context에서 생성한 컴포넌트가 나머지 컴포넌트를 감싸줘야 전역적으로 사용가능 */
    <>
      <GlobalStyle />
      <BestsContainers />
    </>
  );
}

export default App;