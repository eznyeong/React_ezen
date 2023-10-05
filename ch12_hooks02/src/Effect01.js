import React, { useState } from 'react';
import "./ryan.css"

// 지금 코드는 약간의 문제가 발생
// setState보다 console.log()가 먼저 값을 반환하면서 수치가 변환이 안되는 것 처럼 보임
// useState관리하는 state는 가상돔 방식이어서 데이터가 바뀔 때 리렌더링 처리
// 리렌더링 처리되는 약간의 시간동안 콘솔이 먼저 발생돼서 지금과 같은 현상이 발생

// 리렌더링이 다 처리되고 나면 콘솔창으로 띄우라는 명령을 처리

function Effect01() {
    //가격 변수
    const price = 18900;

    //state 변수
    const [num, setNum] = useState(1);

    //입력요소에 직접 입력시 변경되는 setState
    const onDataChange = (e) => {
        setNum(e.target.value);
    }
    //1씩 증가할 함수
    const onIncrease = () => {
        setNum(Number(num) + 1); // state값이 실시간으로 변화 처리

        console.log(num); // 콘솔창에 값을 띄우기
    }
    //1씩 감소할 함수
    const onDecrease = () => {
        setNum(Number(num) - 1); 

        console.log(num);
    }

    return (
        <div className="price_box">
            <h3>라이언 마우스</h3>
            <button onClick={ onDecrease }>-</button>
            <input
                type="text"
                value={ num }
                onChange={ onDataChange }
            />
            <button onClick={ onIncrease }>+</button>
            <h4>{ num }개 { num * price }원</h4>
        </div>
    );
}

export default Effect01;