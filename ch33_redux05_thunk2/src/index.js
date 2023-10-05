import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//1. 스토어 함수 호출 + thunk사용시 미들웨어 함수 호출
import { createStore, applyMiddleware } from 'redux';

//2. 스토어 제공할 Provider 호출
import { Provider } from 'react-redux';

//3. 미들웨어 2개사용시 문법 보기 위해 logger호출
import logger from 'redux-logger';

//4. thunk호출
import ReduxThunk from 'redux-thunk';

//5. 리듀서 호출
import rootReducer from './modules';

//6. 스토어생성
const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk, logger) //실제 logger는 테스트용, 지우고 서버에 올리기
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
