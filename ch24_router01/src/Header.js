import React from 'react';
import { Link } from 'react-router-dom'

// Link 컴포넌트는 a태그를 대신하는 컴포넌트
// a태그는 절대경로(타사이트) 연결할 때 제회하고는 사용 X
// 

function Header() {
    return (
        <div>
            {/* Link태그는 to속성 처리 : 경로 작성 */}
            <h1><Link to="/">로고</Link></h1>
            <ul>
                <li><Link to="/">메인페이지</Link></li>
                <li><Link to="/Map">오시는길페이지</Link></li>
            </ul>
        </div>
    );
}

export default Header;