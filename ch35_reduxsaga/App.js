import React from 'react';
import CounterContainer from './containers/CounterContainer';

// redux-saga : 액션을 모니터링하고 있다가, 특정 액션이 발생되면 이에 따라 특정 작업을 하는 방식의 리덕스 미들웨어

// ** redux-thunk 가 못하는 작업 확인
// 1. 비동기 작업을 할 때 기존 요청을 취소 처리할 수 있음
// 2. 특정 액션이 발생되었을 때 다른 액션을 디스패치처리할 수 있음
// 3. 특정 액션이 발생되었을 때 자바스크립트 코드를 실행할 수 있음
// 4. 웹소켓을 사용하는 경우 Channel이라는 기능을 이용해서 효율적으로 관리
// 5. API요청했을 때, 재요청하는 작업을 할 수 있음
// 6. 다양한 까다로운 비동기 작업을 처리할 수 있음 

function App() {
  return (
    <div>
      <CounterContainer />
    </div>
  );
}

export default App;