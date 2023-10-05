import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 리덕스로 스토어 관리
import {createStore, applyMiddleware} from 'redux'; // applyMiddleware함수 호출해야 미들웨어 사용 가능

// 프로바이더 호출
import { Provider } from 'react-redux';

// 루트리듀서 호출
import rootReducer from './modules';

// 미들웨어 호출
import logger from 'redux-logger';

// 크롬 개발자 도구 호출
import { composeWithDevTools } from 'redux-devtools-extension';

// 스토어 생성
// logger는 다른 미들웨어와 같이 사용될 때 마지막에 호출할 것
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
