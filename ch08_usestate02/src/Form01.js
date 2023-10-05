import React, { useState } from 'react';

// 1. 짧은 조건문을 통해 state데이터 유무에 따라 h3태그를 보이게 처리
function Form01() {

    // state 선언
    const [text, setText] = useState("");

    // setState 처리
    const onNameChange = e => {
        setText(e.target.value);
    }
    



    return (
        <div>
            <form>
                <p>이름 입력 : </p>
                <input
                    type="text"
                    value={text}
                    onChange={onNameChange}
                />
                {/* state는 값이 있으면 true로 반환, 없으면 false // 없다는 것에 빈 문자열도 포함 */}
                { text && <h3>환영합니다. {text}님!</h3> }
            </form>   
        </div>
    );
}

export default Form01;