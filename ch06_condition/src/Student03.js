import React from 'react';

// 학생 한명 UI 컴포넌트
// 조건&&참표현식
// 조건||거짓표현식
function Student03({name, score}) {
    return (
        <div>
            { score >= 80 && <h2>{name} : 합격</h2> }
        </div>
    );
}

export default Student03;