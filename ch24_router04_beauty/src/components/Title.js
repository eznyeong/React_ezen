import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
// Link : a태그를 대신하는 컴포넌트, to속성에 경로 작성


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
      <Link to="/">{name}</Link>
    </TitleBlock>
  );
}

export default Title;
