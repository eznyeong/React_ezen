import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

//스토어 불러오기 - 스토어는 한프로젝트당 한개라서 index.js에 작성
import { createStore } from 'redux'; //밑줄쳐져 있어도 처리 가능

//제공자 컴포넌트 불러오기
import { Provider } from 'react-redux';

//리덕스 모듈 불러오기 - 하나로 모은 루트리듀서로 불러오기
import rootReducer from './modules'; //뒤로 경로를 작성하지 않으면 index찾음

//개발자 도구 호출
import { composeWithDevTools } from 'redux-devtools-extension';


//스토어 생성
const store = createStore(rootReducer, composeWithDevTools());

//console.log(store.getState()); //스토어 값 반환

const root = ReactDOM.createRoot(document.getElementById('root'));

//모든 컴포넌트가 스토어값을 사용할 수 있도록 제공처리
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
