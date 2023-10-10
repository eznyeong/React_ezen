//리덕스모듈
// redux-saga가 갖고 있는 delay(시간을 지연시키는 함수), put함수(이 함수를 통해서 새로운 액션을 디스패치할 수 있음)

// takeEvery : 모니터링하고 있는 동안 모든 액션처리
// takeLatest : 모니터링하고 있는 동안 가장 마지막 액션만 처리
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

//1. 액션타입 지정 - 기본액션타입 + 비동기액션타입 별도지정
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';

//2. 액션생성함수 - thunk함수 => saga로 대체
//액션생성함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 비동기 액션함수
export const increaseAsync = () => ({type: INCREASE_ASYNC});
export const decreaseAsync = () => ({type: DECREASE_ASYNC});

// 제너레이터 함수 선언
function* increaseSaga(){
    yield delay(1000); // 1초 기다리게 처리
    yield put(increase()); // put은 특정 액션을 디스패치 처리
}
function* decreaseSaga(){
    yield delay(1000); // 1초 기다리게 처리
    yield put(decrease()); // put은 특정 액션을 디스패치 처리
}

// 위 2개의 제너레이터를 같이 처리
export function* counterSaga(){
    yield takeEvery(INCREASE_ASYNC, increaseSaga); // 증가는 모든 버튼클릭을 전부 허용
    yield takeLatest(DECREASE_ASYNC, decreaseSaga); // 감소는 마지막 클릭만 허용
}

//thunk함수로 비동기처리 => saga에서는 사용X
// export const increaseAsync = () => dispatch => {
//     setTimeout(() => dispatch(increase()),1000);
// }
// export const decreaseAsync = () => dispatch => {
//     setTimeout(() => dispatch(decrease()),1000);
// }


//3. 초기값 배정 - 값이 여러 개면 객체로 처리
const initialState = 0;

//4. 리듀서 선언해서 내보내기
export default function counter(state = initialState, action){
    switch (action.type){
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}