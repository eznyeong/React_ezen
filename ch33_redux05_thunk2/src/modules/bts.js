//방탄소년단 데이터관리할 리덕스 모듈
//promise를 통해 비동기적으로 만드는 리덕스 모듈 : 로딩중, 성공, 실패로 구분해서 만들기

//0. api데이터 호출
import * as btsAPI from '../apis/bts';
//* 은 내보내는 모든 변수와 함수를 담아옴
//as 뒤에 btsAPI는 별칭을 처리 : btsAPI.함수명

//0. 유틸함수 호출
import { createPromiseThunk, createPromiseThunkId, reducerUtils, handleAsyncActions, handleAsyncActionsId } from '../libs/asyncUtils';


//1. 액션타입생성
//1. 방탄소년단 전체 조회하기
const GET_BTS = 'GET_BTS'; //로딩중
const GET_BTS_SUCCESS = 'GET_BTS_SUCCESS'; //성공
const GET_BTS_ERROR = 'GET_BTS_ERROR'; //실패

//2. 방탄소년단 한명 조회하기
const GET_BT = 'GET_BT';
const GET_BT_SUCCESS = 'GET_BT_SUCCESS';
const GET_BT_ERROR = 'GET_BT_ERROR';

//2. 액션생성함수 - 비동기 데이터는 thunk함수를 사용
//2-1. 전체데이터 액션생성함수
export const getBts = createPromiseThunkId(GET_BTS, btsAPI.getBts);

//2-2. 각각데이터 액션생성함수
export const getBt = createPromiseThunk(GET_BT, btsAPI.getBtById);

//3. 초기값 지정 - 로딩중, 성공, 실패로 나눠서 처리하는 것을 함수호출로 간결하게 처리
const initialState = {
    bts: reducerUtils.initial(),
    bt: reducerUtils.initial()
}


//4. 리듀서 선언
export default function bts(state = initialState, action){
    switch(action.type){
        case GET_BTS:
        case GET_BTS_SUCCESS:
        case GET_BTS_ERROR:
            return handleAsyncActionsId(GET_BTS, 'bts', true)(state, action);
        case GET_BT:
        case GET_BT_SUCCESS:
        case GET_BT_ERROR:
            return handleAsyncActions(GET_BT, 'bt')(state, action);
        default:
            return state;
    }
}