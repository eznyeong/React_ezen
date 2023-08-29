import React from 'react';
import './App.css';
import BucketBox from './components/BucketBox';
import BucketHeader from './components/BucketHeader';
import BucketList from './components/BucketList';
import BucketCreate from './components/BucketCreate';

import { BucketProvider } from './BucketContext';

// 최종적으로 컴포넌트 가져오는 파일
function App() {
  return (
    <BucketProvider>
      {/* 컴포넌트들은 모두 BucketProvider의 자손이나 후손으로 들어가야 데이터 사용 */}
      <BucketBox>
        <BucketHeader />
        <BucketList />
        <BucketCreate />
      </BucketBox>
    </BucketProvider>
  )
}

export default App;