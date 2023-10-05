import React, { useRef } from 'react';
import Bt from './Bt';


// useRef() : 개발자가 특정 DOM을 선택해야하는 경우에 사용
// 추가적인 기능 : useRef를 사용하면 컴포넌트의 이전 상태값을 추적할 수 있음
// 리액트는 랜더링이 계속 처리가 돼서 값을 유지하기 어려움
// useRef를 통해 렌더링 간의 값을 유지할 수 있음
// 리액트 컴포넌트에서 상태값을 바꾸는 함수를 호출하고 나면, 값이 업데이트가 된 상태로 조회
// useRef는 관리하고 있는 변수를 설정 후 바로 조회 가능

function Bts() {
    const bts = [
        {
        id: 'st001',
        name: '김남준',
        age: 28,
        email: 'rm@gmail.com'
        },
        {
        id: 'st002',
        name: '김석진',
        age: 30,
        email: 'jin@gmail.com'
        },
        {
        id: 'st003',
        name: '민윤기',
        age: 29,
        email: 'suga@gmail.com'
        },
        {
        id: 'st004',
        name: '정호석',
        age: 28,
        email: 'j-hope@gmail.com'
        },
        {
        id: 'st005',
        name: '박지민',
        age: 25,
        email: 'jm@gmail.com'
        },
        {
        id: 'st006',
        name: '김태형',
        age: 25,
        email: 'v@gmail.com'
        },
        {
        id: 'st007',
        name: '진정국',
        age: 23,
        email: 'jg@gmail.com'
        },
    ];

    // useRef 선언
    const nextId = useRef(); // 값을 지정하면 컴포넌트에서 고유하게 관리할 값으로 처리, 7번까지 데이터가 있어서 8번으로 변수값 지정

    const onCrete = () => {
        // 지금 적용할 건 아니고 새로운 배열 데이터를 추가하는 함수 선언
        nextId.current += 1; // 함수가 발생될 때 nextId값은 어떤 숫자일지 알 수 없어서 현재값을 찾아오라고 current속성 사용

    }

    return (
        <div>
            { 
                bts.map(bt => <Bt bt={bt} key={bt.id} /> )
            }
        </div>
    );
}

export default Bts;