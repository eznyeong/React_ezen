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
import testLogger from './middlewares/myLoggers';

// 스토어 생성
const store = createStore(rootReducer, applyMiddleware(testLogger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
