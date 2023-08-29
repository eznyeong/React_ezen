import React from "react";

// 규칙 5. 태그 스타일 속성은 {{}} 사용해서 JS 객체표현방식으로 사용
function JSX05(props) {
  let styling = {
    color: "yellow",
    backgroundColor: "black",
  };

  return (
    <div>
      <h1 shyle={{ clolor: "pink", backgroundColor: "black" }}>안녕</h1>
      <p style={styling}>안녕</p>
    </div>
  );
}

export default JSX05;
