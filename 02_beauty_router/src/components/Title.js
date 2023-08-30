import React from "react";
import styled from "styled-components";

const TitleBlock = styled.h1`
  height: 70px;
  font-size: 30px;
  line-height: 70px;
  text-align: center;
  margin-bottom: 40px;
`;

//타이틀을 지정해줄 컴포넌트
function Title({ name }) {
  return (
    <TitleBlock>
      {name}
    </TitleBlock>
  );
}

export default Title;
