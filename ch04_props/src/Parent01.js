import React from 'react';
import Child01 from './Child01';

// 부모 컴포넌트
// 자손 컴포넌트에 props를 내려줌
function Parent01(props) {
    return (
        <div>
            <Child01 name="김석진" />
            <hr />
            <Child01 name="김태형" />
            <hr />
            <Child01 name="박지민" />
            <hr />
            <Child01 name="김남준" />
            <hr />
            <Child01 name="정호석" />
            <hr />
            <Child01 name="민윤기" />
            <hr />
            <Child01 name="진정국" />
        </div>
    );
}

export default Parent01;