import React from 'react';
import Counter2 from './Counter2';

// Hooks : 함수 컴포넌트에 작성하는 내장된 기능
// 원래 서드파티라이브러리로 설치해서 사용하는 기능 => 16.9부터 내장으로 추가
// 함수 컴포넌트가 클래스 컴포넌트와는 다르게 안됬던 기능을 추가하는 것을 Hooks
// Hooks : use영문()
// 리액트 라이브러리 옆에 호출되서 나타나야함
// import React, { hooks함수 } from 'react';
// 보통은 직접 치지 않고, 함수 호출시 자동 생성

// state : 컴포넌트가 자체적으로 관리하는 값
// 클래스 컴포넌트는 state를 내장했으나, 함수 컴포넌트는 갖고 있지 않음
// Hooks인 useState()를 통해서 사용 가능

function App() {
  return (
    <div>
      <Counter2 />
    </div>
  );
}

export default App;