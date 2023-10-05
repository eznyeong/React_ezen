import React from 'react';

function Bt({ bt }) {

    const { name, age } = bt;

    return (
        <div>
            <h4>이름: {name}</h4>
            <h4>나이: {age}</h4>
            <h4>이메일: </h4>
        </div>
    );
}

export default Bt;