import React from 'react';
import styled from 'styled-components'

// CSS in JS : JS문서 안에 CSS언어를 작성
// 대표적인 라이브러리 : styled-components
// 템플릿 리터럴 : ` ` 사용 - 문자열 처리
// 태그드 템플릿 리터럴 : 함수를 템플릿으로 처리

/* 
    function tag함수(){
        // 내용작성
    }

    const 변수 = tag함수``;
*/

/* 
    const 스타일 컴포넌트명 = styled.태그명`
        css언어 작성
    `
    JSX <스타일컴포넌트명 />
*/

const Button = styled.button`
    border: none;
    border-radius: 5px;
    background-color: aquamarine;
    font-size: 16px; color: #fff;
    padding: 10px 20px;
    margin: 50px;
`


// 1. 고정 스타일링
function Button01() {
    return <Button>테스트</Button>;
}

export default Button01;