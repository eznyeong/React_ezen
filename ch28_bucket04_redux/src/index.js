import { createRoot } from "react-dom/client";
import App from "./App";
import { createStore } from "redux"; // 스토어 생성 함수 호출 (밑줄 상관 X)
import { Provider } from "react-redux"; // Provider 컴포넌트 호출
import rootReducer from "./modules"; // index.js는 파일명 작성하지 않아도 인식

// 스토어를 변수에 담기
const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
