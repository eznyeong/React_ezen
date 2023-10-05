import React from 'react';
import Parent03 from './Parent03';
import Child03 from './Child03';

// 할아버지 컴포넌트
// 실제적으로는 Grand03의 자손 : Parent03, Child03
function Grand03() {
    return (
        <div>
            <Parent03>
                <Child03 />
            </Parent03>
        </div>
    );
}

export default Grand03;