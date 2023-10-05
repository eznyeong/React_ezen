import React from "react";
import Child02 from "./Child02";

// 부모 컴포넌트
// 자손 컴포넌트에 props를 내려줌
function Parent02(props) {
  return (
    <div>
      <Child02 name="김석진" birth="1992. 12. 4" />
      <hr />
      <Child02 name="김태형" birth="1995. 12. 30" />
      <hr />
      <Child02 name="박지민" birth="1995. 10. 13" />
      <hr />
      <Child02 name="김남준" birth="1994. 9. 12" />
      <hr />
      <Child02 name="정호석" birth="1994. 2. 18" />
      <hr />
      <Child02 name="민윤기" birth="1993. 3. 9" />
      <hr />
      <Child02 name="진정국" birth="1997. 9. 1" />
      <hr />
      {/* props 안내려줌 */}
      <Child02 />
      <hr />
      <Child02 neme="차은우" birth="1997. 3. 30" group="아스트로" />
    </div>
  );
}

export default Parent02;
