//루트리듀서 : 리듀서들을 모아서 index.js(프로그램진입점)으로 한번에 내보내는 파일

import {combineReducers} from 'redux'
import bests from './bests'

const rootReducer = combineReducers({ bests })

export default rootReducer;