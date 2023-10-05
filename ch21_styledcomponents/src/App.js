import React from 'react';
import Button05 from './Button05';
import { ThemeProvider } from 'styled-components';

//ThemeProvider : 모든 컴포넌트를 조회해서 전역적으로 스타일을 내려줌
//모든 컴포넌트를 감싼 App.js에서 컴포넌트로 감싸줘야 함
//createGlobalStyle컴포넌트를 통해서 사용은 가능
function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          red: '#ff0000',
          green: '#00a651',
          blue: '#0000ff'
        }
      }}
    >
      <Button05 bg="green">더보기</Button05>
      <Button05 bg="blue">더보기</Button05>
      <Button05>더보기</Button05>
    </ThemeProvider>
  );
}

export default App;