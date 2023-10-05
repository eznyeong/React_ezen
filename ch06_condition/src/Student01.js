import React from 'react';

// 학생 한명의 UI를 표시하는 컴포넌트(자손)
// 삼항연산자
// 조건식?참표현식:거짓표현식
function Student01({name, score}) {
    return (
        <div>
            <h2>
                {name} : 
                {
                    score >= 80 ?
                    <span style={{color:"green"}}>합격</span> : <span style={{color:'red'}}>불합격</span>
                }
            </h2>
        </div>
    );
}

export default Student01;