import React, { useCallback, useState } from 'react';
import Room from './Room';


// Hooks : 함수 컴포넌트에 추가하는 기능
// 내장 Hooks - useState(), useRef(), useEffect(), useMemo(), useCallback(), useReducer(), ContextAPI 등등
// useMemo() : 재사용되는 값을 기억
// useCallback() : 재사용되는 함수를 기억
// 메모리 최적화를 위해 둘 다 사용

// useCallback(함수, 의존성배열)
// const add = () => x + y;
// const add = useCallback(() => x + y, [x, y])
function Callback02() {

    // 각각 방에 대한 불이 들어온 상태를 state 선언
    // 값변수, setState함수
    const [bathLight, setBathLight] = useState(false);
    const [kitchenLight, setKitchenLight] = useState(false);
    const [livingLight, setLivingLight] = useState(false);
    const [mainLight, setMainLight] = useState(false);
    const [totalLight, setTotalLight] = useState(false); // 전등ALL state

    // setState를 처리하는 이벤트 함수
    const toggleBath = useCallback(() => {
        if(!bathLight && kitchenLight && livingLight && mainLight){
            setTotalLight(true);
        }else{
            setTotalLight(false);
        }
        setBathLight(!bathLight);
    },[bathLight, kitchenLight, livingLight, mainLight]);
    const toggleKitchen = useCallback(() => {
        if(bathLight && !kitchenLight && livingLight && mainLight){
            setTotalLight(true);
        }else{
            setTotalLight(false);
        }
        setKitchenLight(!kitchenLight);
    },[bathLight, kitchenLight, livingLight, mainLight]);
    const toggleLiving = useCallback(() => {
        if(bathLight && kitchenLight && !livingLight && mainLight){
            setTotalLight(true);
        }else{
            setTotalLight(false);
        }
        setLivingLight(!livingLight);
    },[bathLight, kitchenLight, livingLight, mainLight]);
    const toggleMain = useCallback(() => {
        if(bathLight && kitchenLight && livingLight && !mainLight){
            setTotalLight(true);
        }else{
            setTotalLight(false);
        }
        setMainLight(!mainLight);
    },[bathLight, kitchenLight, livingLight, mainLight]);

    // 전등ALL 이벤트 함수
    const toggleTotal = useCallback(() => {
        if (totalLight) { // 전등ALL에 불이 들어와있다면
            // 4개의 등도 같이 꺼져야 함
            setBathLight(false)
            setKitchenLight(false)
            setLivingLight(false)
            setMainLight(false)
            setTotalLight(false)
        } else {
            setBathLight(true)
            setKitchenLight(true)
            setLivingLight(true)
            setMainLight(true)
            setTotalLight(true)
        }
    }, [totalLight])

    return (
        <div>
            <Room name="욕실" toggle={toggleBath} light={bathLight} />
            <Room name="주방" toggle={toggleKitchen} light={kitchenLight} />
            <Room name="거실" toggle={toggleLiving} light={livingLight} />
            <Room name="안방" toggle={toggleMain} light={mainLight} />
            <hr style={{ clear: "both" }} />
            <Room name="전등ALL"toggle={toggleTotal} light={totalLight} />
        </div>
    );
}

export default Callback02;