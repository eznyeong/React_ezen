import React, { useEffect, useState } from 'react';

// 내장 Hooks : useState, useEffect, useMemo, useCallback, useReducer, useContext 등
// 사용자 Hooks : 개발자가 만드는 Hooks
// use0000 : 이름을 짓는 것이 관례

// FetchAPI 문법 : 외부 문서의 데이터를 불러오는 API
/* 

    fetch(파일명)
    .then(데이터타입매개변수 => 데이터타입매개변수.데이터타입메서드())
    .then(데이터매개변수 => 데이터출력)

*/

// 외부 json데이터를 가져오는 Custom Hooks 만들어 보기
// 현재 파일은 Custom Hooks 없는 코드
function Custom01() {
    // 데이터를 받는 state선언
    const [datas, setData] = useState(null); // 아직 데이터는 없음

    // 주소를 받는 변수
    const url = 'https://jsonplaceholder.typicode.com/todos';

    // 초기 실행에서만 데이터 불러오기
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((datas) => setData(datas))
    },[]);
    
    return (
        <div>
            {
                datas && datas.map(data => {
                    return <p key={data.id}>{data.title}</p>
                })
            }
        </div>
    );
}

export default Custom01;