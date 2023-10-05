import React, { useState } from 'react';

function Counter() {
    // JS 작성하는 곳

    // state 선언
    const [num, setNum] = useState(0); // 기본값 처리

    // 이벤트 함수를 통해 setState() 처리
    const onIncreas = () => {
        if (num < 10) {
            setNum(num + 1);
        }
    }

    const onDecreas = () => {
        if (num > 0) {
            setNum(num - 1)
        }
    }

    return (
        <div style={{padding: 20}}>
            <h1>값 : {num}</h1>
            <button onClick={onDecreas}>-</button>
            <button onClick={onIncreas}>+</button>
        </div>
    );
}

export default Counter;