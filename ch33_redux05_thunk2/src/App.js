import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BtListPage from './pages/BtListPage';
import BtPage from './pages/BtPage';

function App() {
  return (
    <BrowserRouter>
      {/* 페이지 이동이 없는 컴포넌트 작성 */}
      
      <Routes>
        {/* 페이지 이동있는 컴포넌트 작성 */}
        <Route path="/" element={<BtListPage />} />
        <Route path="/:id" element={<BtPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;