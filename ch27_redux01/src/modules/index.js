//루트 리듀서 : 여러 리덕스 모듈을 하나로 모아주는 파일 
//경로인식에서 [modules/]해도 찾을 수 있도록 index.js파일로 생성

import { combineReducers } from 'redux';
import counter from './count';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;