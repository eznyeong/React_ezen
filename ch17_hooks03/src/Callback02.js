import React, { useCallback, useReducer, useState } from 'react';
import Room from './Room';

function lightReducer (state, action) {

    // 비구조화할당
    const { bathLight, kitchenLight, livingLight, mainLight, totalLight } = state;

    switch (action.type) {
        case "bathLight":
            return {
                        ...state,
                        bathLight: !bathLight,
                        totalLight: (!bathLight && kitchenLight && livingLight && mainLight ) ? true : false
                    }
        case "kitchenLight":
            return {
                        ...state,
                        kitchenLight: !kitchenLight,
                        totalLight: (bathLight && !kitchenLight && livingLight && mainLight ) ? true : false
                    }
        case "livingLight":
            return {
                        ...state,
                        livingLight: !livingLight,
                        totalLight: (bathLight && kitchenLight && !livingLight && mainLight ) ? true : false
                    }
        case "mainLight":
            return {
                        ...state,
                        mainLight: !mainLight,
                        totalLight: (bathLight && kitchenLight && livingLight && !mainLight ) ? true : false
                    }
        case "totalLight":
            return {
                        bathLight: totalLight ? false : true,
                        kitchenLight: totalLight ? false : true,
                        livingLight: totalLight ? false : true,
                        mainLight: totalLight ? false : true,
                        totalLight: !totalLight
                    }
        default:
            return state;
    }
}


//전등ALL 추가
function Callback02() {
    
    // 초기 state 변수 선언
    const initialState = {
        bathLight: false,
        kitchenLight: false,
        livingLight: false,
        mainLight: false,
        totalLight: false
    }

    // useReducer 호출
    const [light, dispatch] = useReducer(lightReducer, initialState);

    // 비구조화할당
    const { bathLight, kitchenLight, livingLight, mainLight, totalLight } = light;

    //setState를 처리하는 이벤트 함수
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
    
    //전등ALL의 이벤트 함수
    const toggleTotal = useCallback(() => {
        //전등ALL에 불이 들어와있다면
        //4개등도 같이 꺼져야함
        dispatch({type: "totalLight"})
    },[]);

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