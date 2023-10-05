import React, { useState } from 'react';

// button 태그의 type 속성
// 1. button : 일반 버튼 - 기능만 처리 시 사용
// 2. submit : 전송 버튼 - 폼 데이터 전체를 전송 (기본값)
// 3. reset : 취소 버튼 - 폼 데이터를 전부 삭제 (잘 안씀)

function Form02() {
    // 입력상자에 데이터가 없다면 데이터 전송 X, 있을 때만 전송 O

    // state 선언
    const [name, setName] = useState("");

    // 이름 변경 setState 함수 처리
    const onNameChange = e => {
        setName(e.target.value)
    }

    // submit 이벤트 : 폼 전체 데이터를 전송하는 이벤트 - form 태그에만 적용

    const onNameSubmit = e => {
        // e : 이벤트 객체
        if (!name) { // state 값이 없다면
            e.preventDefault(); // 기본 이벤트를 제거하는 이벤트 객체 메서드 - 데이터 전송 방지
        }
    }

    return (
        <div>
            <form onSubmit={onNameSubmit}>
                <p>이름 입력 : </p>
                <input type="text" value={name} onChange={onNameChange}/>
                <button type="submit" >데이터 전송</button>
            </form>            
        </div>
    );
}

export default Form02;