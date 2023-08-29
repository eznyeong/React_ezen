import React, { useMemo, useState } from 'react';

// useMemo : 연산된 값을 재사용하도록 도와주는 Hooks
// Memoization : 컴퓨터 프로그램이 동일한 계산을 반복할 때, 이전 계산값을 메모리에 저장해줘서 동일한 계산 반복수행을 제거해서 프로그램 실행 속도를 빠르게 처리

// useMemo(함수, 의존성배열)
// 의존성배열의 값이 업데이트 될 때만 콜백함수를 다시 호출해서 memoization된 값을 업데이트 해줌
// 의존성배열이 비어 있다면 처음 렌더링 때만 연산처리 후 항상 memoization된 값을 꺼내와서 사용

function MemoTest02() {
    // state 선언
    const [x, setX] = useState(1);

    // useMemo로 연산된 값 가져오기
    const memoValue = useMemo(() => {
        return calc(0);
    }, []); // calc()함수 값을 처음 한 번만 가져옴

    // 화면에 최종적으로 도출될 변수
    const value = memoValue * x;

    return (
        <div>
            <h3>계산값 : {value}</h3>
            <button onClick={() => 
                setX((n) => n + 1)
            }>+</button>
        </div>
    );
}

// 엄청난 계산을 하는 함수 선언
const calc = num => {
    console.log("계산중...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    console.log("계산완료...");
    return num;
};

export default MemoTest02;