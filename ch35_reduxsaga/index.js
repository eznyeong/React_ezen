import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, {rootSaga} from './modules';
import ReduxThunk from 'redux-thunk';
import createSagaMiddlewara from 'redux-saga';

// 스토어 생성전 사가 미들웨어 생성
const sagaMiddleware = createSagaMiddlewara();

// 스토어생성
const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk, sagaMiddleware)
)

// 루트 사가 실행
sagaMiddleware.run(rootSaga); // 주의 : 스토어가 실행된 후에 작성

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
