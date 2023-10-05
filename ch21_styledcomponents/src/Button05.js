import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const ButtonBlock = styled.button`
    border: none;
    border-radius: 5px;
    font-size: 16px; 
    padding: 10px 20px;
    margin: 50px;
    color: white;

    // 배경색 처리
    ${({theme, bg}) => {
        const selected = theme.palette[bg];
        return css`
            background-color: ${selected};

            &:hover{ background-color: ${lighten(0.1, selected)}; }
            &:active{ background-color: ${darken(0.1, selected)}; }
        `;
    }}
`;

function Button05({children, ...props}) {
    return (
        <ButtonBlock {...props}>
            {children}
        </ButtonBlock>
    );
}

Button05.defaultProps = {
    bg: 'red'
}

export default Button05;