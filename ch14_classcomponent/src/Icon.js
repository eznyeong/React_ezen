import React from 'react';
import { BsHearts } from "react-icons/bs";
import './test.css'; // 크기 관련은 font-size나 svg크기로 변환

// 사이트에서 가져오는 구문 복사 후 아이콘명 변경
// npm install react-icons --save

// 아이콘관련 - 서드파티라이브러리 설치 후 사용

// JSX에 컴포넌트로 처리
function Icon() {
    return (
        <div className='heart'>
            <BsHearts />
        </div>
    );
}

export default Icon;