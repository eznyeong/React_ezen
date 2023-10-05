import React from "react";

// 규칙 2. 꼭 닫혀있어야 하는 문법
// img, br, input 등 작성 시 <태그명 /> 닫아주기
// - 자손을 담는 유형 : <태그명></태그명>
// - 자손을 담지 않는 유형 : <태그 />

function JSX02(props) {
  return (
    <div>
      <h1>안녕하세요</h1>
      <input type="checkbox" />
    </div>
  );
}

export default JSX02;
