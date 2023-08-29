import React, { useState } from 'react';

// 2. 여러 개 입력상자 값 관리
// e.target.value : 이벤트를 받는 입력요소의 value을 반환해라
// e.target.name : 이벤트를 받은 입력요소의 name값으로 반환 - 이것을 통해서 요소 구분


function InputText02() {
    //스타일처리
    const style = {
        width: "500px",
        padding: '10px',
        margin: '10px',
        border: '3px solid black'
    }

    // state 선언 - 값을 한번에 2개 이상 관리 - 객체문법을 통해서 속성으로 관리
    const [inputs, setInputs] = useState({
        username: "",
        userid: ""
    });

    // 비구조화할당으로 state값 해제
    const { username, userid } = inputs;

    // input은 두 개지만 change 이벤트를 같이 사용
    const onDataChange = e => {
        // e : 이벤트 객체
        // e.target을 비구조화할당 처리
        const { value, name } = e.target;
        setInputs({
            // 안 바뀌고 있는 속성은 그대로 복사 - 나머지 패턴
            ...inputs, [name] : value // 객체 내부에서 밖에 있는 변수를 속성명으로 사용 시 대괄호를 작성하는 것이 문법
        })
    }

    const onDataReset = () => {
        setInputs({
            username: "",
            userid: ""
        })
    }

    return (
        <div style={ style }>
            <input
                type="text"
                placeholder="이름입력"
                name="username"
                value={username}
                onChange={onDataChange}
            />
            <input
                type="text"
                placeholder="아이디입력"
                name="userid"
                value={userid}
                onChange={onDataChange}
            />
            <button onClick={onDataReset}>데이터 리셋</button>
            <h3>값 : {username}({userid})</h3>
        </div>
    );
}

export default InputText02;