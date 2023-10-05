import React, { useEffect } from 'react';
import axios from 'axios'; // 라이브러리 호출

function BtsAxios() {

    // 초기에만 데이터 호출
    useEffect(() => {
        axios.get('http://localhost:4000/bts')
        .then(response => {
            console.log(response); // 성공했을 때
            console.log(response.data); // 데이터만 가져옴
        });
    }, []);
    return (
        <div>
            
        </div>
    );
}

export default BtsAxios;