import React from 'react';

// 자손 컴포넌트
function Child04( {name, subject} ) {
    return (
        <div>
            <h1>이름 : {name}</h1>
            <h1>과목 : {subject}</h1>
        </div>
    );
}

export default Child04;