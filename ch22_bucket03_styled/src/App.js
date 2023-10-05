import React from 'react';
import BucketBox from './components/BucketBox';
import BucketHeader from './components/BucketHeader';
import BucketList from './components/BucketList';
import BucketCreate from './components/BucketCreate';
import { BucketProvider } from './BucketContext';

//1. 라이브러리 불러오기
import { createGlobalStyle } from 'styled-components'; //전역스타일을 호출

//2. 스타일 컴포넌트 선언
const GlobalStyle = createGlobalStyle`
  *{ padding: 0; margin: 0; }

  body{
    background-color: #e9ecef;
  }
`;


//최종적으로 컴포넌트 가져오는 파일
function App() {

  //3. JSX에 스타일 컴포넌트 추가
  return (
    <BucketProvider>
      <GlobalStyle />
      {/* 컴포넌트들은 모두 BucketProvider의 자손이나 후손으로 들어가야 데이터 사용 */}
      <BucketBox>
        <BucketHeader />
        <BucketList />
        <BucketCreate />
      </BucketBox>
    </BucketProvider>
  );
}

export default App;