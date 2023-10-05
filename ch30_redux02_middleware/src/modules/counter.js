const SET_DIFF = 'counter/SET_DIFF'; 
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';


export const setDiff = diff => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });


const initialState = {
    number: 0, 
    diff: 1 
}


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