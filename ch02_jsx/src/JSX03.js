import React from "react";

// 규칙 3. JSX의 표현식 { }
// JSX 내부에서 자바스크립트 표현식을 작성하는 문법
function JSX03(props) {
  // JSX 아님 => 자바스크립트 코드 작성
  let a = 10;
  let b = 20;
  let name = prompt("이름을 작성하세요", "이름만");
  // 경고창 관련은 2번씩 뜨는데, index.js에서 React.StrictMode를 삭제

  // return 내부가 JSX 코드 작성
  return (
    <div>
      <h1>5 + 5 = {5 + 5}</h1>
      <h1>a + b = {a + b}</h1>
      <h1>안녕하세요! {name}님</h1>
    </div>
  );
}

export default JSX03;
