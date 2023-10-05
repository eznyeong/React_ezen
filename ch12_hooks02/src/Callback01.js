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
function Callback01() {

    // 각각 방에 대한 불이 들어온 상태를 state 선언
    // 값변수, setState함수
    const [bathLight, setBathLight] = useState(false);
    const [kitchenLight, setKitchenLight] = useState(false);
    const [livingLight, setLivingLight] = useState(false);
    const [mainLight, setMainLight] = useState(false);

    // setState를 처리하는 이벤트 함수
    const toggleBath = useCallback(() => {
        setBathLight(!bathLight);
    }, [bathLight]);
    const toggleKitchen = useCallback(() => {
        setKitchenLight(!kitchenLight);
    }, [kitchenLight])
    const toggleLiving = useCallback(() => {
        setLivingLight(!livingLight);
    }, [kitchenLight])
    const toggleMain = useCallback(() => {
        setMainLight(!mainLight);
    }, [mainLight])


    return (
        <div>
            <Room name="욕실" toggle={toggleBath} light={bathLight} ></Room>
            <Room name="주방" toggle={toggleKitchen} light={kitchenLight} ></Room>
            <Room name="거실" toggle={toggleLiving} light={livingLight} ></Room>
            <Room name="안방" toggle={toggleMain} light={mainLight} ></Room>
        </div>
    );
}

export default Callback01;