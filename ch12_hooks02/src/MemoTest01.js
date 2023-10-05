import React, { useState } from 'react';

// useMemo : 연산된 값을 재사용하도록 도와주는 Hooks
// Memoization : 컴퓨터 프로그램이 동일한 계산을 반복할 때, 이전 계산값을 메모리에 저장해줘서 동일한 계산 반복수행을 제거해서 프로그램 실행 속도를 빠르게 처리

// 함수 컴포넌트 [렌더링 => 컴포넌트 함수 호출 => 모든 내부 변수 초기화]
// state가 아닌 일반 변수에 선언한 value값이 매번 초기화 처리
// calc()함수를 반복적으로 호출
// calc()함수를 매번 실행한다는 것은 비효율적 => 메모리 누수

function MemoTest01() {
    // state 선언
    const [x, setX] = useState(1);

    // value라는 변수에 calc()함수 활용
    // 매번 반복문을 실행한 후에 계산을 또 하다보니 결과가 느리게 나옴
    const value = calc(0) * x;

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

export default MemoTest01;