//루트 리듀서 : 여러 리듀서를 하나로 모아서 index.js의 스토어로 보낼 문서

import { combineReducers } from "redux";
import bts from "./bts";

const rootReducer = combineReducers({ bts }); //모듈 연결은 객체안에 계속 작성

export default rootReducer;