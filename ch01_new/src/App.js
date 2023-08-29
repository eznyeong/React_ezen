import React from "react";

// 프로젝트 폴더 구조

// 1. node_modules : 바벨 및 웹팩을 통해서 리액트를 실행시켜주는 파일들을 모아 놓은 폴더
// 2. public : 바벨이 변환시켜서 연결시킨 [index.html]을 저장하고 있는 폴더
// 3. src : 리액트로 개발하는 파일들을 저장하는 폴더
// 4. build : 실제 서버에 올리는 파일들을 모아 놓은 폴더 => 그냥 생성되지 않고, npm build 혹은 yarn build를 통해 처리
// 5. src/index.js : 프로그램 진입점 => public폴더의 index.html에 데이터를 반환
// 6. src/App.js : 최상위 컴포넌트 => 컴포넌트들을 모아 index.js에 반환

// 컴포넌트(component) : 재사용 가능한 UI생성 파일 => xxx.js

const App = (props) => {
  return (
    <div>
      <h1>안녕하세요</h1>
    </div>
  );
};

export default App;
