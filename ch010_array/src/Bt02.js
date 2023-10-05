import React from 'react';

/*
1. props를 각각 받은 경우
function Bt02({name, age, email}) {
    return (
        <div>
            <h4>이름 : {name}</h4>
            <h4>나이 : {age}</h4>
            <h4>이메일 : {email}</h4>
            <hr />
        </div>
    );
}
*/

/*
2. 데이터를 한번에 props로 처리
*/
function Bt02(bt) {

    // props를 비구조화할당 처리
    const { name, age, email } = bt;

    return (
        <div>
            <h4>이름 : {name}</h4>
            <h4>나이 : {age}</h4>
            <h4>이메일 : {email}</h4>
            <hr />
        </div>
    );
}

export default Bt02;