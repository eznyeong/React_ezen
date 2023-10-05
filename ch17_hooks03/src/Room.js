import React from 'react';
import './light.css';

//각각의 불이 들어오는 방을 의미하는 자손컴포넌트
function Room({name, light, toggle}) {
    console.log(name, light);
    return (
        <div className="box">
            <button
                className={ light ? "on" : "off" }
                onClick={toggle}
            >{name}</button>
        </div>
    );
}

//useCallback을 받은 컴포넌트는 React.memo()로 감싸줘서 내보내야 처리해줌
//컴포넌트의 리렌더링 성능을 최적화시키기로 약속되어 있는 함수
export default React.memo(Room);

//React.memo의 추가적인 문법
/*
    function 컴포넌트명(){
        //렌더링
    }
    function areEqual(prevProps, nextProps){
        //prevProps와 nextProps와 동일한 값을 가지면 true를 반환하고, 그렇지 않다면 false를 반환
    }
    export default React.memo(컴포넌트명, areEqual);
*/