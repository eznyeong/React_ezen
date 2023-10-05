import React from "react"; // 리액트 라이브러리 호출
import JSX07 from "./JSX07"; // 자손 컴포넌트 호출

// App.js : 최상위 컴포넌트 - 컴포넌트 모아놓는 폴더

// 함수 컴포넌트
function App(props) {
  // 화면에 소스를 표시하는 JSX 파트
  return (
    <div>
      <h1>로고</h1>
      <JSX07 />
    </div>
  );
}

export default App; // 다른 js파일이 가져다 쓸 수 있도록 내보내기 처리 (자바스크립트 모듈화)
