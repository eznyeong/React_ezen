import React from 'react';
import '../scss/bestlist.scss';
import BestItem from './BestItem';

//컨텍스트로 state값 사용
import { useBestState } from '../BestContext';

//리스트 전체는 map으로 반환할 컴포넌트
function BestList() {

    //bests변수에 state값 담기
    const bests = useBestState();

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
                    />
                ))
            }
        </ul>
    );
}

export default BestList;