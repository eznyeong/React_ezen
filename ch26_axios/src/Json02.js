import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Fetch API로 라이브러리 없이 사용 가능 - Fetch API는 JS에 내장되어 있음
function Json02() {
    // 데이터를 받을 state선언
    const [datas, setDates] = useState([]); // 아직 데이터가 오지 않아서 빈 배열로 초기값 처리

    // 초기 실행에서 데이터를 한 번 가져옴
    useEffect(() => {
        // axios.get(url) : 데이터를 얻어오는 메서드
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            setDates(response)
        })
        // response로만 호출하면 해당 페이지으 ㅣ모든 정보가 담ㄱ니 객체 반환
        // data: : 데이터만 담긴 속성

    }, []); // 의존설 배열이 비어있으면 초기 실행 한번만 처리


    return (
        <div>
            {
                datas.map((data, index) => {
                    <div key={index}>
                        {data.name}
                    </div>
                })    
            }
        </div>
    );
}

export default Json02; 