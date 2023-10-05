import React from 'react';
import { Styled, styled } from 'styled-components';
import {darken, lighten} from 'polished'

const ButtonBlock = styled.button`
    border-radius: 5px;
    font-size: 16px; 
    padding: 10px 20px;
    margin: 50px;
    color: white;
    border: none;

    $mainColor: navy;

    /* 배경색 처리 */
    background-color: navy;

    /* 마우스 올리면 밝게 처리 */
    &:hover {
        background-color: ${lighten(0.1, 'navy')};
    }

    /* 마우스 꾹 누르면 어둡게 처리 */
    &:active {
        background-color: ${darken(0.1, 'navy')};
    }
`

// polished : sass의 내장함수를 사용할 수 있도록 도와주는 라이브러리
// CSS in JS 기반으로 된 라이브러리와 함께 사용
// lighten(정도, 색상), darken(정도, 색상)
function Button04({children}) {
    return (
        <div>
            <ButtonBlock>{children}</ButtonBlock>
        </div>
    );
}

export default Button04;