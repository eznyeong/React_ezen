import React from 'react';

// Props통해서 값이나 state를 내려주게 되면 Props Drilling이라는 값 내려꽂기 현상이 발생
// 1-2개까지는 상관없으나 프로젝트가 크면 복잡해짐

// 최종 자손
function Child({ name }) {
    return ( <div><h1>안녕하세요! { name }님</h1></div> );
}
function Parent({ name }) {
    return ( <div><Child name={name} /></div> );
}
function Grand({ name }) {
    return ( <div><Parent name={name} /></div> );
}

function Context01() {
    return ( <div><Grand name="홍길동" /></div> );
}

export default Context01;