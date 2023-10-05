import React from 'react';

function Counter({number, diff, onIncrease, onDecrease, onSetDiff }) {
    const onChange = e => {
        onSetDiff(parseInt(e.target.value, 10));
    }

    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
                <br />
                <p>증가 숫자 변경</p>
                <input type="number" value={diff} min="1" onChange={onChange} />
            </div>
        </div>
    );
}

export default Counter;