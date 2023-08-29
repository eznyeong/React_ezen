import React, { useState } from 'react';

//문제 : 이름과 나이를 입력받아 2개의 값변화를 처리하시오.
//이때 나이를 숫자로 쓰지 않으면 옆에 에러메시지가 뜨게 제작하시오.
//xxx님, 나이는 숫자로 입력해야 합니다. => strong태그로 뜨게 제작
function Form01() {
    //스타일처리
    const style = {
        width: '500px',
        padding: '10px',
        margin: '10px',
        border: '3px solid black'
    }

    //state관리 - 2개의 입력상자 데이터를 한번에 관리
    //에러메세지도 state처리
    const [inputs, setInputs] = useState({
        username: '',
        userage: '',
        errormessage: '' //에러메시지를 담을 상태값 추가
    });

    //state 값을 비구조화할당으로 해체
    const { username, userage, errormessage } = inputs;

    //이벤트함수 - setState처리
    const onDataChange = (e) => { //e: 이벤트 객체
        //e.target의 속성을 비구조화할당처리
        const { name, value } = e.target;
        let err = ''; //에러메시지를 담을 변수

        //리액트는 완전항등연산자와 완전불항등연산자만 사용할 것
        if(name === 'userage'){ //타겟의 이름이 userage일때만 명령실행
            if(value !== '' && !Number(value)){ //값이 비어있지 않고 숫자가 아니라면
                err = <strong>{username}님, 나이는 숫자로 입력해야 합니다.</strong>;
            }
        }

        setInputs({
            ...inputs, //바뀌지 않는 state는 그냥 복제해서 가져오고
            [name]: value, //name키를 가진 값을 value를 설정
            errormessage: err //에러메시지 처리
        });
    }

    return (
        <form style={ style }>
            <p>이름 입력 :</p>
            <input 
                type="text"
                name="username"
                value={username}
                onChange={onDataChange}
            />
            <hr />
            <p>나이 입력 :</p>
            <input
                type="text"
                name="userage"
                value={userage}
                onChange={onDataChange}
            />
            { errormessage }
        </form>
    );
}

export default Form01;