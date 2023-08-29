import React, { useRef, useState } from 'react';
import './ref.css'

// Hooks : 기존 함수 컴포넌트가 사용 못하더너 기능을 추가한 것 (16.8 이후)
// ref: 개발자가 특정 DOM에 선택해야 하는 상황이 발생할 때 사용 - 클래스컴포넌트에는 내장
// useRef() : 함수컴포넌트에 지원되는 ref
// id는 특수한 상황이 아니고서는 작성 X (권장하지 않음) => id가 중복돼서 에러가 발생하기 때문
// ref를 꼭 사용하는 이유
// 1. 특정 input에 포커스 줄 때
// 2. 스크롤바 조작
// 3. Canvase태그 요소에 그림 그리기
/* 
    * ref 지정
    1. useRef()를 통해 특정 DOM명 설정
    const ref명 = useRef();
    
    2. JSX 특정 요소에 ref 설정
    <태그명 ref={ref} />

    3. current 속성 : ref가 가지고 있는 고유한 속성
    컴포넌트는 재사용될 수 있기 때문에 현재 컴포넌트 특정 DOM만 선택
*/




// input태그 요소에 비밀번호를 쳤을 때 비밀번호가 1234와 같다면 초록색, 그렇지 않으면 주황색 처리
// 그렇지 않을 때 input요소에 초점이 가도록 처리
function Ref() {
    // state선언
    const [inputs, setInputs] = useState({
        password: '', // 입력상자에 입력된 값 - 초기에는 비워두기
        clicked: false, // 클릭한 상태 - 초기값은 false
        validated: false, // 유효성검사 - 처음엔 값이 없으니 false
    })

    // 비구조화할당처리 - state속성
    const { password, clicked, validated } = inputs;

    // 이벤트 함수 + setState
    const onPassChange = (e) => {
        setInputs({
            ...inputs, // 기존 state는 그대로 오고
            password: e.target.value // 입력상자값만 변경
        });
    }

    // ref함수 호출
    // const ref명 = useRef();
    // 특정 DOM명으로 처리
    const passwordInput = useRef();
    console.log(passwordInput);

    // 버튼이벤트 + setState
    const onButtonClick = (e) => { // e : 이벤트 객체
        e.preventDefault(); // 폼 기본 이벤트 제거
        setInputs({
            ...inputs, // 안바뀌는 state는 그냥 가져오고
            clicked: true,
            validated: password === '1234' // 유효한 값인지 비교 처리
        });
        
        // 패스워드가 1234가 아니면 해당 input요소에 초점받게 처리
        if (password !== '1234') {
            passwordInput.current.focus();
        }
    }

    // className에는 불표현식이 적용되면 안 되고 값이 없거나, 문자열이어야 함
    // 짧은 조건문 쓰면 조건문이 맞지 않을 때 false가 들어가서 에러 발생 → 삼항연산자 사용

    return (
        <div>
            <form>
                <input
                    type="password"
                    value={password}
                    onChange={onPassChange}
                    className={clicked ? (validated ? 'success' : 'failure') : undefined}
                    ref={passwordInput}
                />
                <button type="submit" onClick={onButtonClick}>검증하기</button>
                <hr />
                <h3>현재 입력값 : {password}</h3>
            </form>            
        </div>
    );
}

export default Ref;