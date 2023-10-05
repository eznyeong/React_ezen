import React from 'react';

// 학생 한명의 UI를 표시하는 컴포넌트(자손)
// if문을 표현식에 사용시 즉시실행함수 작성
/* 

    (function(){

    })();


    (()=>{

    })();

*/
function Student04({name, score}) {
    return (
        <div>
            <h2>
                {name} : 
                {
                    (()=>{
                        if(score >= 80){
                            return '합격';
                        }else {
                            return '불합격';
                        }
                    })()
                }
            </h2>
        </div>
    );
}

export default Student04;