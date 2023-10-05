// 루트리듀서 : 여러 리듀서 함수를 모아서 내보낼 파일

import { combineReducers } from 'redux';
import buckets from './buckets';

const rootReducer = combineReducers({
    buckets
    // 추가되는 리듀서 작성
});

export default rootReducer;