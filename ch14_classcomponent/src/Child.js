import React, { Component } from 'react';

// 자식 컴포넌트
// 함수가 아니여서 매개변수 쓰는 파트 없음
// class문법에서는 속성을 호출 시 this.속성명을 사용하는 것이 규칙
class Child extends Component {

    render() {
        // JS언어 render함수에 처리
        
        // this.props 비구조화 할당
        const { name, age, hobby } = this.props;
        
        // JSX 리턴 내부에 처리
        return (
            <div>
                <h3>이름 : {name}</h3>
                <h3>나이 : {age}</h3>
                <h3>취미 : {hobby}</h3>
            </div>
        );
    }
}

// 디폴트 프롭스 처리 - 함수 컴포넌트와 동일
Child.defaultProps = {
    name: '홍길동',
    age: 20,
    hobby: '코딩'
}


export default Child;