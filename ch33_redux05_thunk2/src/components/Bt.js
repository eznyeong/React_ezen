import React from 'react';

// 한명한명을 보여줄 프레젠테이셔널 컴포넌트
function Bt({ bt }) {
    const { img, name, birth } = bt;

    return (
        <div>
            <img src={img} alt="멤버이미지" />
            <h3>이름: {name}</h3>
            <h3>출생: {birth}</h3>
        </div>
    );
}

export default Bt;