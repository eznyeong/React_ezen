import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// BrowserRouter : 브라우저라우터 컴포넌트를 통해 라우팅 기술을 사용
// Routes : 페이지 변환이 일어나는 컴포넌트들을 모아주는 컴포넌트
// Route : 페이지 변환이 일어나는 컴포넌트 한개한개를 담는 컴포넌트 {주소배정}
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Map from './Map';
import NotFound from './NotFound';;

// SPA(Single Page Application) : 단일 페이지 웹 개발 언어 → 리액트
// 페이지 이동을 하고 싶을 기술을 쓰는 것을 라우팅 (routing)
// 대표적인 라우팅 라이브러리 중 하나 : react-router-dom

// 라우터 컴포넌트 종류
// 1. BrowserRouter : 웹개발에서 가장 많이 쓰는 방식의 라우터 - HTML5를 지원하는 브라우저를 감지
// 2. HashRouter : 해시 주소(http://localhost...)를 감지
// 3. MemoryRouter : 
// 4. NativeRouter : 리액트 네이티브에서 사용하는 라우팅 기술
// 5. StaticRouter : 브라우저 주소가 아닌 속성으로 전달된 주소를 사용하는 라우터
function App() {
  return (
    <BrowserRouter>
      {/* 페이지 변환이 일어나지 않는 header 처리 */}
      <Header />
      <Routes>
        {/* 페이지 변환이 일어날 컴포넌트를 담음 */}
        {/* Route는 path속성(경로생성)처리, element속성(컴포넌트담기)처리 */}
        {/* /가 root페이지를 의미, *은 경로가 없는 모든 페이지주소를 의미 */}
        <Route path='/' element={<Main />} />
        <Route path='/map' element={<Map />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;