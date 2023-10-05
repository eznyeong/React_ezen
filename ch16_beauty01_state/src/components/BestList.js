import React from 'react';
import '../scss/bestlist.scss';
import BestItem from './BestItem';

//리스트 전체는 map으로 반환할 컴포넌트
function BestList({ bests, onToggle, onRemove }) {
    return (
        <ul>
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
        </ul>
    );
}

export default BestList;