import React from 'react';
import { styled } from 'styled-components';

const TitleBlock = styled.h2`
    height: 70px; font-size: 30px; line-height: 70px; text-align: center;
`;

//타이틀을 지정해줄 컴포넌트
function Title({name}) {
    return <TitleBlock>{name}</TitleBlock>;
}

export default Title;