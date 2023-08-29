import React, { Component } from 'react';
import Child from './Child';

// 부모 컴포넌트
class Parent extends Component {
    render() {
        return (
            <div>
                <Child name="김철수" age="20" hobby="등산" />
                <hr />
                <Child name="이영희" age="24" hobby="영화보기" />
                <hr />
                <Child />
            </div>
        );
    }
}

export default Parent;