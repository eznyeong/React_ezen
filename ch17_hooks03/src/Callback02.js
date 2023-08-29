import React, { useCallback, useReducer, useState } from 'react';
import Room from './Room';

function lightReducer (state, action) {
    // 비구조화할당
    const { bathLight, kitchenLight, livingLight, mainLight, totalLight } = state;

    switch (action.type) {
        case "bathLight":
            return { ...state, bathLight: !bathLight }
        case "kitchenLight":
            return { ...state, kitchenLight: !kitchenLight }
        case "livingLight":
            return { ...state, livingLight: !livingLight }
        case "mainLight":
            return {...state, mainLight: !mainLight}
        case "totalLight":
            return { ...state, totalLight: !totalLight }
        default:
            return state;
    }
}


//전등ALL 추가
function Callback02() {
    //각각 방에 대한 불들어온 상태를 state선언 → reducer 로 변경
    const initialState = {
        bathLight: false,
        kitchenLight: false,
        livingLight: false,
        mainLight: false,
        totalLight: false
    }

    // 리듀서 처리
    const [light, dispatch] = useReducer(lightReducer, initialState);

    // 비구조화할당
    const { bathLight, kitchenLight, livingLight, mainLight, totalLight } = light;

    //setState를 처리하는 이벤트 함수
    const toggleBath = useCallback(() => {
        if(!bathLight && kitchenLight && livingLight && mainLight){
            dispatch({type: "totalLight"})
        }
        dispatch({type: "bathLight"})
    },[]);
    const toggleKitchen = useCallback(() => {
        if(bathLight && !kitchenLight && livingLight && mainLight){
            dispatch({type: "totalLight"})
        }
        dispatch({type: "kitchenLight"})
    },[]);
    const toggleLiving = useCallback(() => {
        if(bathLight && kitchenLight && !livingLight && mainLight){
            dispatch({type: "totalLight"})
        }
        dispatch({type: "livingLight"})
    },[]);
    const toggleMain = useCallback(() => {
        if(bathLight && kitchenLight && livingLight && !mainLight){
            dispatch({type: "totalLight"})
        }
        dispatch({type: "mainLight"})
    },[]);
    
    //전등ALL의 이벤트 함수
    const toggleTotal = useCallback(() => {
        if(totalLight){ //전등ALL에 불이 들어와있다면
            //4개등도 같이 꺼져야함
            dispatch({type: "totalLight"})
        }else{
            dispatch({type: "totalLight"})
        }

        dispatch({type: "totalLight"})
    },[totalLight]);

    return (
        <div>
            <Room name="욕실" toggle={toggleBath} light={bathLight} />
            <Room name="주방" toggle={toggleKitchen} light={kitchenLight} />
            <Room name="거실" toggle={toggleLiving} light={livingLight} />
            <Room name="안방" toggle={toggleMain} light={mainLight} />
            <hr style={{ clear: 'both' }} />
            <Room name="전등ALL" toggle={toggleTotal} light={totalLight} />
        </div>
    );
}

export default Callback02;