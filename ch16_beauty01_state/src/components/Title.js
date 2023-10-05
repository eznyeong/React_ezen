import React from 'react';
import '../scss/title.scss';

//타이틀을 지정해줄 컴포넌트
function Title({ name }) {
    return <h2>{name}</h2>;
}

export default Title;