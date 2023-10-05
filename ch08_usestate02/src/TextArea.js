import React, { useState } from 'react';

// textarea 태그 : 여러 줄 입력상자
// 1. html문법 : <textarea>value값<textarea>
// 2. JSX문법 : <textarea value="" />

function TextArea() {
    //스타일처리
    const style = {
        width: "300px",
        padding: '10px',
        margin: '10px',
        border: '3px solid black'
    }

    // state 선언
    const [text, setText] = useState("내용을 입력하세요."); // 기본값 처리

    // setState + change 이벤트 함수
    const onDataChange = e => {
        setText(e.target.value);
    }
    
    // setState + click 이벤트 함수 => 데이터 초기화
    const onDataReset = () => {
        setText("") // 빈 문자열 처리
    }


    return (
        <form style={ style }>
            <textarea
                rows="10"
                value={text}
                onChange={onDataChange}
            />
            <h3>내용: {text}</h3>
            <hr />
            <button onClick={onDataReset}>데이터리셋</button>
        </form>
    );
}

export default TextArea;