import React from "react"; // 같은 확장자라서 확장자 작성 X
import "./style.css"; // css는 다른 확장자라서 확장자 작성 O

// 규칙 6. css의 클래스 가져오기 => 태그의 속성에 class가 아닌 className으로 작성
function JSX06(props) {
  return (
    <div>
      <h1 className="title">안녕하세요</h1>
    </div>
  );
}

export default JSX06;
