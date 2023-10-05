import React, { useState } from 'react';

// 1. 입력상자 값 한 개를 컨트롤 하는 컴포넌트
// state : 컴포넌트가 자체적으로 관리하는 값
// <input type="text" value="" name="" placeholder="" />
// 1. value : 사용자가 입력하는 값 (초기값 지정 가능)
// 2. name : 폼 요소에 이름 지정 - 폼 요소를 구분 (ID 사용 X)
// 3. placeholder : 예시 텍스트

// change 이벤트 : 폼 요소들의 데이터가 변경될 때


function InputText01() {
    
    const style = {
        width: "300px",
        padding: '10px',
        margin: '10px',
        border: '3px solid black'
    }
        
    // state 선언 - 입력 요소의 value 값
    const [text, setText] = useState("");

    // 이벤트 함수 - input쓰는 값이 변경되도록 처리
    // e.target - target은 이벤트를 받는 문서객체 대상
    // e.target.value - 입력요소가 현재 갖고 있는 값을 반환하는 속성

    const onDataChange = e => {
        // e : 이벤트 객체
        setText(e.target.value)
    }

    // 이벤트 함수 - 데이터 초기화 - setState()
    const onDataReset = () => {
        setText("");
    }

    return (
        <div style={style}>
            <input
                type="text"
                placeholder="이름을 입력하세요."
                value={text}
                onChange={onDataChange}
            />
            <button onClick={onDataReset}>데이터 리셋</button>
            <h3>값 : {text}</h3>
        </div>
    );
}

export default InputText01;