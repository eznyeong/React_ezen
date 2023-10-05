import React, { useCallback, useReducer } from 'react';
import Room from './Room';

// 리듀서 함수 선언
function lightReducer(state, action) {
    // 각각의 state를 비구조화할당 처리
    const { bathLight, kitchenLight, livingLight, mainLight } = state;
    
    // 각각의 명령
    switch (action.type) {
        case "bathLight":
            return { ...state, bathLight: !bathLight }
        case "kitchenLight":
            return { ...state, kitchenLight: !kitchenLight }
        case "livingLight":
            return { ...state, livingLight: !livingLight }
        case "mainLight":
            return { ...state, mainLight: !mainLight }
        default:
            return state; // 강제에러발생 혹은 기존 값 처리
    }
}


function Callback01() {
    // 각각 방에 대한 불들어온 상태를 state선언 → reducer로 선언
    // 초기 state값 기정
    const initialState = {
        bathLight: false,
        kitchenLight: false,
        livingLight: false,
        mainLight: false
    }

    //useReducer 처리
    const [light, dispatch] = useReducer(lightReducer, initialState);

    // 각각의 state를 비구조화할당 처리
    const { bathLight, kitchenLight, livingLight, mainLight } = light;

    // 업데이트 로직이 리듀서함수로 분리 → 명령처리는 dispatch함수를 통해 처리
    const toggleBath = useCallback(() => {
        dispatch({type: "bathLight"})
    },[]);
    const toggleKitchen = useCallback(() => {
        dispatch({type: "kitchenLight"})
    },[]);
    const toggleLiving = useCallback(() => {
        dispatch({type: "livingLight"})
    },[]);
    const toggleMain = useCallback(() => {
        dispatch({type: "mainLight"})
    },[]);

    return (
        <div>
            <Room name="욕실" toggle={toggleBath} light={bathLight} />
            <Room name="주방" toggle={toggleKitchen} light={kitchenLight} />
            <Room name="거실" toggle={toggleLiving} light={livingLight} />
            <Room name="안방" toggle={toggleMain} light={mainLight} />
        </div>
    );
}

export default Callback01;