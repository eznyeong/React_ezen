import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { useSyncExternalStoreco } from 'react';

// 스토어 생성 함수 호출
import {createStore} from 'redux'

// 루트리듀서 호출
import rootReducer from './modules'

// 모든 앱에서 store값을 사용하도록 Provider 컴포넌트 호출
import { Provider } from 'react';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
