import React from "react";

// JSX(JavaScript XML) : 리액트에서 UI 구현할 때 표현하는 문법
// JSX는 HTML이 아니다.
// 컴포넌트의 return() 파트에 작성하는 코드

// 규칙 1. 태그는 꼭 최상위 태그로 감싸줘야 한다. (태그는 어떤 것이어도 상관 X)
// <div></div>를 작성시 스타일에서 문제가 생길 수 있음 => <></>로 대체
// <Fragment></Fragment> : 최상위 태그를 처리하는 컴포넌트 => 하지만 무거워서 잘 안씀

function JSX01(props) {
  // JS언어 작성 가능

  // JSX구문 작성
  return (
    <div>
      <h1></h1>
    </div>
  );
}

export default JSX01;
