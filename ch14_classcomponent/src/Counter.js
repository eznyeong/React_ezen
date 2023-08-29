import React, { Component } from 'react';

// state : 컴포넌트가 관리하는 값
// 함수 컴포넌트와 다르게 내장
class Counter extends Component {
    // state 작성
    // state는 클래스 컴포넌트가 독자적으로 가지고 있는 객체

    // state 선언
    state = {
        num: 0
    }

    // 이벤트함수 - setState() 함수 사용
    // 1씩 증가하는 함수
    onIncease = () => {
        this.setState({
            num: this.state.num + 1
        })
    }
    // 1씩 감소하는 함수
    onDecease = () => {
        this.setState({
            num: this.state.num - 1
        })
    }

    render() {
        // props 작성
        // JSX에 이벤트 처리 시에도 <요소 on이벤트명={this.함수명}>
        return (
            <div>
                <h1>{ this.state.num }</h1>
                <button onClick={this.onDecease}>-</button>
                <button onClick={this.onIncease}>+</button>
            </div>
        );
    }
}

export default Counter;