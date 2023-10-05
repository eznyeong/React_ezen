import React from 'react'; // 리액트 플러그인 연결

import MainPage from './MainPage';
import MapPage from './MapPage';

// 최상위 컴포넌트 : 컴포넌트를 모아 index.js 내보내줌
// 리액트는 가상돔 기반으로 처리
// 가상돔 만든 이유 : 지속해서 데이터가 변화하는 대규모 애플리케이션을 구축하기 위해 리액트를 만듬
// SPA(Single Page Application) : 단일 페이지 프로그램
// 서드파티 라이브러리인 라우터를 통해서 서브 페이지 제작
function App(props) {
  return (
    <div>
      <MainPage />
      <hr />
      <MapPage />
    </div>
  );
}

export default App; // index.js가 가져다 쓸 수 있도록 내보내줌