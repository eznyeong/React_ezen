import React, { useState } from 'react';

// select : 여러 옵션 중 하나를 선택하는 태그 요소
// 1. html문법
/* 
    <select>
        <option value="값">옵션</option>
    </select>
*/
// 2. JSX문법
// JS에서 select태그 요소는 객체선택.value : 선택 상자에서 선택된 옵션의 value값이 반환
/* 
    <select value="상태값">
        <option value="값">옵션</option>
    </select>
*/

function Select() {

    // state 선언
    const [dinner, setDinner] = useState("");

    // 이벤트 함수 - select 태그는 원래 change 이벤트 갖고 있음 - 옵션 값이 변경 될 때
    const onDataChange = e => {
        setDinner(e.target.value);
    }

    // setState 처리


    return (
        <div>
            <form>
                <h3>비오는 날 저녁메뉴 골라보세요.</h3>
                <select value={dinner} onChange={onDataChange}>
                    <option value="치킨">치킨</option>
                    <option value="파전">파전</option>
                    <option value="곱창">곱창</option>
                </select>
                <h4>선택메뉴 : {dinner} </h4>
            </form>
        </div>
    );
}

export default Select;