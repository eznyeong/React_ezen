// 1. 액션명 지정
const SET_DIFF = 'counter/SET_DIFF'; 
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 2. 액션 생성 함수
// 2-1. 비동기적이지 않은 액션 생성 함수는 같게 적기
export const setDiff = diff => ({ type: SET_DIFF, diff });
// 2-2. 비동기적으로 처리되는 것은 thunk함수로 처리
// 일반함수로 처리한 경우
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 비동기 thunk함수로 처리
export const increaseAsync = () => dispatch => {
    // 1초 뒤에 increase액션생성함수 발생
    setTimeout(() => dispatch(increase()), 1000);
};
export const decreaseAsync = () => dispatch => {
    // 1초 뒤에 decrease액션생성함수 발생
    setTimeout(() => dispatch(decrease()), 1000);
};

// 3. 초기값 지정
const initialState = {
    number: 0, 
    diff: 1 
}

// 4. 리듀서 함수 선언
export default function counter(state = initialState, action){
    //상태 업데이트 로직 분리
    switch (action.type){
        case SET_DIFF:
            return {
                ...state, 
                diff: action.diff
            }
        case INCREASE:
            return {
                ...state, 
                number: state.number + state.diff
            }
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff
            }
        default:
            return state; //리덕스는 강제에러 발생 사용하지X
    }
}