import React from 'react';

// ~ 8/4 과제 !!!
// 문제 : 이름과 나이를 입력 받아 2개의 값 변화를 처리하시오.
// - 나이를 숫자로 쓰지 않으면 옆에 에러메세지가 뜨게 제작하시오.
// - 에러메세지 : xxx님, 나이는 숫자로 입력해야 합니다. (strong 태그 사용)

function Form03() {
    //스타일처리
    const style = {
        width: '90%',
        maxWidth: '500px',
        padding: '10px',
        margin: '10px',
        border: '3px solid black'
    }

    return (
        <form style={ style }>
            <p>이름 입력 :</p>
            <input type="text" />
            <hr />
            <p>나이 입력 :</p>
            <input type="text" />
        </form>
    );
}

export default Form03;