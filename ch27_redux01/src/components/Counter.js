import React from 'react';

//프레젠테이셔널 컴포넌트 : 화면에 보여지는 컴포넌트
function Counter({number, diff, onIncrease, onDecrease, onSetDiff }) {
    //change 이벤트 함수
    const onChange = e => {
        onSetDiff(parseInt(e.target.value, 10));
    }

    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
                <hr />
                <p>증가 숫자 변경</p>
                <input type="number" value={diff} min="1" onChange={onChange} />
            </div>
        </div>
    );
}

export default Counter;