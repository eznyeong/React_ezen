import React, { useEffect, useState } from 'react';

// useEffect는 결국 렌더링 관련 문제
// 1. 마운트 : 컴포넌트가 처음 나타났을 때를 의미
//  - Props로 받은 값을 컴포넌트의 로컬 상태로 설정
//  - 외부 API 요청
//  - 라이브러리 사용
//  - setInterval()과 setTimeout()을 통한 작업

// 2. 언마운트 : 컴포넌트가 사라질 때를 의미
//  - clearInterval()과 clearTimeout()으로 작업이 제거 됨
//  - 라이브러리 인스턴스 제거

// 3. 업데이트 : 특정 Props나 State가 변경될 때를 의미


// 내부에 위에 작성 - 자손 컴포넌트 생성
function Child(name, id, onRemove) {
    // 한 개의 버튼을 클릭해도 모든 컴포넌트가 언마운트와 마운트를 반복
    // 메모리 누수가 너무 큼
    useEffect(() => {
        // 마운트시 명령
        console.log('컴포넌트가 화면에 나타남')

        // 언마운트시 명령
        return () => {
            console.log('컴포넌트가 화면에서 사라짐')
        }
    }); // 의존성 배열 없이 리렌더링 시 계속 실행

    return (
        <div>
            <h3>안녕! 나는 {name} 이야! / <button onClick={() => onRemove(id)}>삭제</button></h3>
        </div>
    )
}


const onRemove = id => {
    setLangs(langs.filter((lang, index) => index !== id))
}

// 현재 컴포넌트
function Effect05() {
    // state 선언
    const [langs, setLangs] = useState(['리액트','뷰','앵귤러','스벨트']);    

    return (
        <div>
            {
                langs.map((lang, index) => <Child key={index} name={lang} id={index} onRemove={onRemove} />)
            }
        </div>
    );
}

export default Effect05;