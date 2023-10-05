import React from "react";

// 규칙 7. 조건부렌더링 : if문은 불편해서 삼항연산자나 짧은 조건문 사용
// if문을 표현식 내부에 쓸려면 즉시실행함수 작성

/*
    (() => {
        if문 작성
    })();
*/
function JSX07(props) {
  // JS문법

  const score = prompt("점수입력", "0~100");
  return (
    <div>
      {score >= 80 ? (
        <h1 style={{ color: "green" }}>합격</h1>
      ) : (
        <h1 style={{ color: "red" }}>불합격</h1>
      )}
    </div>
  );
}

export default JSX07;
