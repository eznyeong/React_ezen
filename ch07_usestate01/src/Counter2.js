import React, { useState } from 'react';

// useState() : 함수 컴포넌트가 값을 관리하는 함수
// const [state변수, setState함수] = useState(기본값);



function Counter2(props) {
    const style = {
        width: '200px',
        padding: '10px',
        margin: '10px',
        border: '3px solid black',
        textAlign: 'center'
    }

    // 1-10사이 숫자만 나오게 처리

    const [num, setNum] = useState();

    const plusNumber = () => {
        setNum(num+1);
        if(num == 10){
            return();
        }
    }

    const minusNumber = () => {
        setNum(num-1);
        if(num == 0){
            return();
        }
    }

    
    return (
        <div style={style}>
            <h1>값변화 : {num}</h1>
            <button onClick={plusNumber}>+1</button>
            <button onClick={minusNumber}>-1</button>
        </div>
    );
}

export default Counter2;