import React from 'react';
import Title from './Title';
import BestList from './BestList';
import BestCreate from './BestCreate';

//기존 scss파일 삭제

//styled 호출
import { styled } from 'styled-components';

//스타일 컴포넌트 생성
const BestBoxBlock = styled.div`
    width: 1180px; margin: 0 auto;
    padding: 10px 10px 90px; box-sizing: border-box;

    position: relative; /* +/x 자버튼 위치 컨트롤 */
`;

//모든 요소를 감싸고 가운데 영역으로 모아 줄 컴포넌트
function BestBox({bests, onCreate, onToggle, onRemove}) {
    //JSX내부에 스타일 컴포넌트 처리
    return (
    <BestBoxBlock>
        <Title name="BEST PRODUCT" />
        <BestList bests={bests} onToggle={onToggle} onRemove={onRemove} />
        <BestCreate onCreate={onCreate} />
    </BestBoxBlock>
    )
}

export default React.memo(BestBox);