import React from 'react';
import Student03 from './Student03';

function Condition03(props) {
    return (
        <div>
            <h1>7월 수학테스트 합격자 리스트</h1>
            <Student03 name="김철수" score="90" />
            <Student03 name="홍길동" score="70" />
            <Student03 name="박영희" score="85" />
        </div>
    );
}

export default Condition03;