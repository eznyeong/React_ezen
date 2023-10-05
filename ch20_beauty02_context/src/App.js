import React from 'react';
import BestBox from './components/BestBox';
import Title from './components/Title';
import BestCreate from './components/BestCreate';
import BestList from './components/BestList';
import { BestProvider } from './BestContext';


function App() {
  return(
    /* context에서 생성한 컴포넌트가 나머지 컴포넌트를 감싸줘야 전역적으로 사용가능 */
    <BestProvider>
      <BestBox>
        <Title name="BEST PRODUCT" />
        <BestList />
        <BestCreate />
      </BestBox>
    </BestProvider>
  );
}

export default App;