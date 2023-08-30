import React from 'react';
import { btsData } from './btsData';
import {useParams} from 'react-router-dom'

// 주소/1 => 1만 호출
// useParams는 주소에서 파라미터만 반환

// 방탄소년단 한명한명을 표시할 각각 컴포넌트
function BtPage() {

    const bts = btsData;
    const {id} = useParams();

    // 객체 데이터 비구조화할당
    const {name, birth, img} = bts[id - 1]

    return (
        <div>
            <img src={img} alt="멤버이미지" />
            <h3>이름: {name}</h3>
            <h3>출생: {birth}</h3>
        </div>
    );
}

export default BtPage;