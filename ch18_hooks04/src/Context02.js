import React, { createContext, useContext } from 'react';


// React의 Context는 전체적으로 사용하고 싶은 특정값을 관리하는 방법
// 클래스 컴포넌트는 내장되어 있었지만,
// 함수 컴포넌트는 ContextAPI를 Hooks로 제공

// 1. context 생성 : createContext()
// 2. context 조회 : useContext()

// name context생성 - 외부 문서에 있어도 됨
const Name = createContext('김철수');

// 최종 자손
function Child({  }) {
    // 사용할 컴포넌트에서 조회
    const name = useContext(Name);

    return ( <div><h1>안녕하세요! { name }님</h1></div> );
}
function Parent({  }) { // 현재 자손들에 props가 없음
    return ( <div><Child /></div> );
}
function Grand({  }) {
    return ( <div><Parent /></div> );
}

// 최상위 컴포넌트 - Context를 자손들에게 제공
function Context02() {
    return (
        /* 최상위 컴포넌트의 자손/후손들은 Name값을 언제든지 사용 가능해짐 */
        <Name.Provider value="홍길동">
            <Grand />
        </Name.Provider>
    );
}

export default Context02;