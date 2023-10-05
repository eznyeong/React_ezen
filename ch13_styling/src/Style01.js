import React from 'react';
import './test.css'

// inline styling : JSX에서 직접 스타일링 처리
function Style01() {
    const style02 = {
        backgroundColor: "black",
        color: "pink"
    }
    return (
        <div>
            <h1 style={{
                backgroundColor: "black",
                color: "yellow"
            }}>테스트1</h1>
            <h1 style={style02}>테스트2</h1>
            <h1 className='title'>테스트3</h1>
        </div>
    );
}

export default Style01;