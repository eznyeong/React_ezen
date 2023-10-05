import React from 'react';

//1. styled 호출
import styled from 'styled-components';

//2. 스타일컴포넌트 선언
const BucketBoxBlock = styled.div`
    width: 512px; height: 768px; 
    overflow: hidden; margin: auto;
    position: absolute; 
    left: 0; right: 0; top: 0; bottom: 0;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

//버킷리스트를 전체적으로 모아주고, 브라우저 가운데 오게 해줄 컴포넌트
//부모가 내려준 자손은 props.children을 통해 표시해줌
function BucketBox({children}) {
    //3. JSX에 스타일컴포넌트 적용 - className삭제
    return <BucketBoxBlock>{children}</BucketBoxBlock>;
}

export default BucketBox;