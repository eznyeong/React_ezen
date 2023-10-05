import React from 'react';

// 변경 버튼을 클릭 시 나타나는 입력폼
function UpdateStudent({onDataChange2, onCompleteClick, student, setView}) {
    const style = {
    width: "640px",
    margin: "20px",
    padding: "10px",
    border: "3px solid green"
    };

    // 변경 완료 이벤트 함수
    const onBtnClick = () => {
        setView(false);
    }
    
    return (
    <div style={ style }>
        <input
            type="text"
            name="name"
            placeholder="이름입력"
            onChange={onDataChange2}
        />
        &nbsp;&nbsp;
        <input
            type="text"
            name="age"
            placeholder="나이입력"
            onChange={onDataChange2}
        />
        &nbsp;&nbsp;
        <input
            type="text"
            name="email"
            placeholder="이메일입력"
            onChange={onDataChange2}
        />
        &nbsp;&nbsp;
            <button
                onClick={() => {
                    onBtnClick();
                    onCompleteClick(student.id);
                }}
            >변경완료
            </button>
    </div>
    );
}

export default UpdateStudent;