import React from 'react';

// 부모 컴포넌트 - 테두리 처리용 컴포넌트
function Parent04({children}) {
    //JS문법
    const style = {
        width: '500px',
        border: '2px solid black',
        padding: '10px',
        margin: '10px'
    }

    //JSX문법
    return (
        <div style={style}>
            {children}
        </div>
    );
}

export default Parent04;