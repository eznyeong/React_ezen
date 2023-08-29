import React, { useEffect, useState } from 'react';

// 타이머함수 부작용 해결 - useEffect
// 재렌더링이 되면서 setTimeout을 계속 실행 → 숫자가 계속 증가
// useEffect를 통해서 setTimeout이 한 번만 실행되도록 처리
// setTimeout(콜백함수, 시간) - 시간 뒤에 함수 명령을 한 번 실행하는 함수

function Effect04() {
    // 숫자 state선언
    const [count, setCount] = useState(0);
    
    // 3초 뒤에 count가 1만큼 증가되도록 처리
    useEffect(() => {
        setTimeout(() => {
            setCount((c) => c + 1 )
        }, 3000)
    }, []) // 빈 매열이면 초기렌더링 시에 한 번만 실행

    return (
        <div>
            현재 숫자 : { count }
        </div>
    );
}

export default Effect04;