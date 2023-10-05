import React from 'react';
import { btsData } from './btsData';
import { Link } from 'react-router-dom'

// 방탄소년단 전체 썸네일 표시하는 컴포넌트
// 경로 : url주소
// 파라미터 : url주소/파라미터1
// 쿼리스트링 : url주소?파라미터1=값1&파라미터2=값2
// 유튜브 영상 자동재생 : https://youtube.com/sdfsdf?autoplay=1&mute=1

// 각각 멤버페이지 주소 : http://localhost:3000/1
// 클릭 시 쿼리스트링 처리 : http://localhost:3000/1?army=true
function BtsListPage() {

    const bts = btsData;

    return (
        <ul>
            {
                bts.map(bt => (
                    <li key={bt.id}>
                        <Link to={`/${bt.id}?army=${bt.army}`}><img src={bt.img} alt={bt.name} /></Link>
                    </li>
                ))
            }
        </ul>
    );
}

export default BtsListPage;