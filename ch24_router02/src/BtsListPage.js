import React from 'react';
import { btsData } from './btsData';
import { Link } from 'react-router-dom'

// 방탄소년단 전체 썸네일 표시하는 컴포넌트
function BtsListPage() {

    const bts = btsData;

    return (
        <ul>
            {
                bts.map(bt => (
                    <li key={bt.id}>
                        <Link to={`/${bt.id}`}><img src={bt.img} alt={bt.name} /></Link>
                    </li>
                ))
            }
        </ul>
    );
}

export default BtsListPage;