import React from 'react';
import Parent04 from './Parent04';
import Child04 from './Child04';

// 할아버지 컴포넌트
function Grand04() {
    return (
        <div>
            <Parent04>
                <Child04 name="김석진" subject="리액트" />
            </Parent04>
            <Parent04>
                <Child04 name="김태형" subject="뷰" />
            </Parent04>
            <Parent04>
                <Child04 name="박지민" subject="스벨트" />
            </Parent04>
        </div>
    );
}

export default Grand04;