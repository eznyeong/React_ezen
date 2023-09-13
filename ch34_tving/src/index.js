import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

//관련 라이브러리 호출
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; //제공자
import rootReducer from './modules';
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger';

//스토어 생성
const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk, logger) // logger가 마지막
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
