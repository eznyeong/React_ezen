import React from 'react';
import styled from 'styled-components';

// 스타일 컴포넌트 선언 - 변수명의 첫 글자를 대문자로 작성
const Button = styled.button`
    border: none;
    border-radius: 5px;
    font-size: 16px;
    padding: 10px 20px;
    margin: 50px;

    // 배경색과 글자색을 가변적으로 처리
    // default로 처리한 값은 props값을 내려받지 못했을 때 적용
    // 색상 코드를 잘못 적으면 요소의 기본값 처리
    color: ${props => props.text || "white"};
    background-color: ${props => props.bg || "gray"};
`
// 2. props를 통해 전달받는 가변 스타일링
function Button02({children, bg, text}) {
    // props를 다시 한번 더 자손에게 내려주는 방식으로 코딩 처리
    return <Button bg={bg} text={text}>{children}</Button>;
}

export default Button02;