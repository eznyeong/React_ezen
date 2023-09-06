import React from 'react';
import BestItem from './BestItem';
import { styled } from 'styled-components';

const BestListBlock = styled.ul`
    width: 100%; overflow: hidden; margin-bottom: 30px;
`;


//리스트 전체는 map으로 반환할 컴포넌트
function BestList({bests, onToggle, onRemove}) {

    return (
        <BestListBlock>
            {
                bests.map(best => (
                    <BestItem
                        key={best.id}
                        id={best.id}
                        name={best.name}
                        price={best.price}
                        descript={best.descript}
                        image={best.image}
                        like={best.like}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                ))
            }
        </BestListBlock>
    );
}

export default React.memo(BestList);