import React, { useReducer } from 'react';



// useReducer() : state 관리하고 업데이트 하는 Hooks, setState 부분을 컴포넌트로부터 분리하는 기능을 가지고 있음
// 원래 Redux라이브러리가 Reducer로 분리해서 사용하고 있는 것을 리액트가 Hooks로 가져옴
/* 
    useReducer 문법
    1. useReducer 함수 : useReducer(리듀서함수명, 초기 state값지정);
f
    2. Reducer 함수
    function 리듀서함수명(state, action){
        // 새로운 상태를 만드는 로직 작성
    }
*/

// useReducer VS useState
// 1. useState 사용 : 관리할 state가 1개, state값이 단순한 숫자나 문자열, boolean인 경우
// 2. useReducer 사용 : 관리할 state가 많은 경우, 큰 프로젝트인 경우, state값의 구조가 객체방식으로 복잡할 경우

// reducer 함수 선언 - setState로직을 컴포넌트로부터 분리
function reducer(state, action) {
    // state 매개변수 : 컴포넌트에서 사용한 state값(상태)
    // action 매개변수 : 업데이트 로직에 줄 명령
    // dipatch : reducer함수를 실행시키며, 컴포넌트 내부에서 state의 업데이트를 구현

    // reducer 내부에는 명령 처리를 switch구문을 통해서 액션에 맞는 명령을 배당해주는 것으로 많이 사용
    
    // 카운터에서는 2가지 action이 필요 - 1씩 증가 / 1씩 감소
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            // 보통 기본값으로는 기존 state를 반환하거나 강제에러 발생
            // return state;
            throw new Error("잘못된 액션입니다.")
    }
}


function Reducer01() {
    const style = {
        width: '200px',
        padding: '10px',
        margin: '10px',
        border: '3px solid black',
        textAlign: 'center'
    }

    // state 선언은 컴포넌트 내부에 선언
    const [num, dispatch] = useReducer(reducer, 0); 

    return (
        <div style={style}>
            <h1>값변화 : { num }</h1>
            <button onClick={()=> dispatch({type: 'increment'})}>+</button>
            <button onClick={()=> dispatch({type: 'decrement'})}>-</button>
        </div>
    );
}

export default Reducer01;