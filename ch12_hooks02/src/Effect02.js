import React, { useEffect, useState } from 'react';
import "./ryan.css"

// useEffect()는 컴포넌트를 사용할 때 발생되는 부작용을 커버하는 Hooks
// 1. 비동기를 동기로 처리할 때(현재 문제점)
// 2. 데이터 가져올 때(데이터를 가져올 때도 시간차 발생)
// 3. DOM을 직접 업데이트 시에 사용
// 4. 타이머 함수 사용할 때

// useEffect(함수, 의존성배열)
// 1. 모든 렌더링에서 명령을 실행
/*
    useEffect(() => {
        // 계속 실행할 명령 작성
    })
*/

// 2. 첫 번째 렌더링에서 명령을 실행 - ex) 데이터 가져올 때
/*
    useEffect(() => {
        // 처음 한번만 실행할 명령 작성
    }, []);
*/

// 3. prop과 state값이 변경될 때, 초기실행 때도 같이 실행
/*
    useEffect(() => {
        // 대괄호 내부에 작성된 값이 변경될 때만 명령을 실행
    }, [특정prop명, 특정state명])
*/

function Effect02() {
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
    }
    //1씩 감소할 함수
    const onDecrease = () => {
        setNum(Number(num) - 1); 
    }

    // useEffect를 통해 num값이 setState처리가 돼서 리렌더링이 다 되면 명령 실행
    useEffect(() => {
        console.log(num);
    }, [num]);

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

export default Effect02;