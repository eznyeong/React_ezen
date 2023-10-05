import React from 'react';

// 고객 한명에 대한 UI를 작성하는 컴포넌트(자손)
function Costomer02({name, isEmail}) {
    return (
        <div>
            <h2>
                {name} : {isEmail ? '이메일수신' : '이메일미수신'}
            </h2>
        </div>
    );
}

export default Costomer02;