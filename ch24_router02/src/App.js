import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { btsData } from './btsData'; // 배열 데이터 호출

import Header from './Header';
import Footer from './Footer';
import BtsListPage from './BtsListPage';
import BtPage from './btPage';

// 페이지 주소를 정의할 때 유동적인 값을 전달하는 속성이 존재
// 1. 파라미터 : 경로/파라미터명칭
// 2. 퀴리스트링 : 경로?속성1=값1&속성2=값2
function App() {

  // 보통 state로 받아와야하지만 현재는 데이터 변화는 없어서 변수로 처리
  const bts = btsData;

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* 페이지 이동이 일어날 컴포넌트 페이지 처리 */}
        {/* 각각 멤버 페이지를 /1 /2 /3 ... 이런식으로 배당 예정 */}
        <Route path="/" element={<BtsListPage/>} />
        {/* 서브페이지 여러 개 많들 때 파라미터로 각각의 이름 배당 */}
        <Route path="/:id" element={<BtPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;