import React from 'react';
import Grand04 from './Grand04';

// 컴포넌트가 사용하는 값 : props, state
// 1. props : 부모 컴포넌트가 자손 컴포넌트에 내려주는 값
//    ㄴproperties : 속성
//    ㄴprops : 컴포넌트 속성명 = "값"
//    ㄴ자손 컴포넌트는 그 데이터를 읽기만 가능
// 2. state : 컴포넌트가 자신이 관리하는 값

function App(props) {
  return (
    <div>
      <Grand04 />
    </div>
  );
}

export default App;