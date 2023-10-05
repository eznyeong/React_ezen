import React, { useState } from 'react';

// useState() : 함수 컴포넌트가 값을 관리하는 함수
// const [state변수, setState함수] = useState(기본값);



function Counter(props) {
    const style = {
        width: '200px',
        padding: '10px',
        margin: '10px',
        border: '3px solid black',
        textAlign: 'center'
    }

    // state선언
    const [num, setNum] = useState(0); // 괄호안은 기본값 작성

    //이벤트함수 작성 + setState() => state값이 변경됨

    // num++ 또는 num-- 를 사용하면 랜더링관계 때문에 에러 발생

    // 1. 1씩 증가하는 함수
    const onIncrease = () => {
        setNum(num+1);
    }

    // 2. 1씩 감소하는 함수
    const onDescrease = () => {
        setNum(num-1);
    }
    
    return (
        <div style={style}>
            <h1>값변화 : {num}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDescrease}>-1</button>
        </div>
    );
}

export default Counter;