import React from 'react';

// 자손 컴포넌트
// 재사용 가능한 UI : 이름을 매번 다르게 처리
// 컴포넌트의 매개변수로 props라는 객체가 선언되어 있음
// JSX에서 표현식을 통해서 props.속성명
function Child01(props) {
    return (
        <div>
            <h3>제 이름은 {props.name}입니다.</h3>
        </div>
    );
}

export default Child01;