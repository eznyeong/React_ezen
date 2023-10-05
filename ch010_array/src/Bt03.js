import React from 'react';

function Bt03({bt}) {
    // bt데이터 : 객체데이터
    // 비구조화할당도 객체방식 처리
    const { name, age, email, url } = bt;

    return (
        <div>
            <img src={url} alt={name} />
            <h4>이름 : {name}</h4>
            <h4>나이 : {age}</h4>
            <h4>이메일 : {email}</h4>
            <hr />
        </div>
    );
}

export default Bt03;