import React, { useState } from 'react';
import UpdateStudent from './UpdateStudent';

// 학생 한 명을 관리 할 부모 컴포넌트
// 삭제 이벤트 현재 컴포넌트가 갖고 있지만, 데이터관리는 부모 컴포넌트
// 부모에서 이벤트 함수 만들어서 Props로 내려줌
function Students({ student, onRemove, onDataChange2, onCompleteClick}) {
    // student(객체) - 비구조화할당 처리
    const { name, age, email, id } = student;

    // state 선언 - 변경폼이 보이게 할지 말지를 지정하는 state
    const [view, setView] = useState(false);

    // setState
    const onUpdateClick = () => {
        setView(!view); // true/false를 번갈아 실행해야 한다면 이렇게 작성
        setView(true); // 보이게만 처리해서 true로 처리
    }



    return (
        <div>
            <b>이름 : { name }</b>
            &nbsp; / &nbsp;
            <b>나이 : { age }세</b>
            &nbsp; / &nbsp;
            <b>이메일 : { email }</b>
            &nbsp; / &nbsp;
            <button onClick={onUpdateClick}>변경</button>
            &nbsp; / &nbsp;
            <button onClick={() => onRemove(id)} >
                삭제
            </button>
            {view &&
                <UpdateStudent
                onDataChange2={onDataChange2}
                onCompleteClick={onCompleteClick}
                student={student}
                setView={setView}
                />
            } 
            <hr />
        </div>
    );
}

export default Students;