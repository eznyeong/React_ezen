// 루트 리듀서
import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import { all } from "redux-saga/effects"; // 모든 이펙트 처리

const rootReducer = combineReducers({ counter });

// 제너레이터를 통해 rootSaga 처리
export function* rootSaga(){
    yield all([counterSaga()]); // all함수는 배열 안에 여러 사가를 동시에 실행
}

export default rootReducer;