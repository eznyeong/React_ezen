import React from 'react';
import { Link } from 'react-router-dom';

// 방탄소년단 전부를 보여줄 프레젠테이셔널 컴포넌트
function BtList({ bts }) {
    return (
        <ul>
            {
                bts.map(bt => (
                    <li key={bt.id}  >
                        <Link to={`/${bt.id}`}>
                            {/* <img src={bt.img} alt={bt.name} /> */}
                            {bt.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
}

export default BtList;