import React from 'react';
import styled, {css} from 'styled-components';

// css함수 : styled가 제공하는 태그드함수 - 여러 개의 css속성을 묶어서 정의할 수 있음

// 스타일 컴포넌트 선언 - 변수명의 첫 글자를 대문자로 작성
const Button = styled.button`
    border: none;
    border-radius: 5px;
    font-size: 16px;
    padding: 10px 20px;
    margin: 50px;

    // basic - 기본 상태
    ${
        props => props.basic && 
        css`
            color: white;
            background-color: lightblue;
        `
    }
    // active - 활성 상태
    ${
        props => props.active && 
        css`
            color: white;
            background-color: navy;
        `
    }
    // inactive - 비활성화 상태
    ${
        props => props.inactive && 
        css`
            color: white;
            background-color: #ccc;
        `
    }
`

// 3. 여러 속성을 한번에 묶는 가변 스타일링
function Button03({children, ...props}) { // 컴포넌트에 내려진 props를 전부 다 가져옴
    return <Button>{children}</Button>;
}

export default Button03;