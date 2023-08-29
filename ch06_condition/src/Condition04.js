
import React from 'react';
import Student04 from './Student04';

//학생 전부의 수학테스트 결과를 작성하는 컴포넌트
function Condition04(){
    return (
        <div>
            <h1>7월 수학테스트 결과</h1>
            <Student04 name="김철수" score="90" />
            <hr />
            <Student04 name="홍길동" score="70" />
            <hr />
            <Student04 name="박영희" score="85" />
        </div>
    );
}

export default Condition04;