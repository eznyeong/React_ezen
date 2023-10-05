import React from 'react';

// 한명한명 데이터를 표시하는 자손 컴포넌트
function Ive({ ive }) {
    
    // props로 받은 객체 전체 데이터 비구조화할당처리
    const { name, birth, url } = ive;

    return (
        <div>
            <img src={url} alt={name} />
            <h4>이름 : {name}</h4>
            <h4>출생일 : {birth}</h4>
            <hr />
        </div>
    );
}

export default Ive;