import React from 'react';
import Costomer02 from './Costomer02';

// 고객 데이터 전부를 표시하는 컴포넌트(부모)
// 이메일 수신여부 true/false로 처리
function Condition02(props) {
    return (
        <div>
            <h1>고객의 이메일 수신여부</h1>
            <Costomer02 name="김철수" isEmail={true} />
            <hr />
            <Costomer02 name="홍길동" isEmail={false} />
            <hr />
            <Costomer02 name="박영희" isEmail={true} />
        </div>
    );
}

export default Condition02;