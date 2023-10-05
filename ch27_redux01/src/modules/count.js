//리덕스모듈 : 컴포넌트가 아니라서 소문자 작성
//카운터 리덕스 모듈

//1. 액션타입 지정 - 명령의 종류 지정 - 숫자변경, 증가, 감소
//액션명 지정시 '모듈명/명령이름' - Ducks패턴에서 작성
//액션을 담는 변수는 전부 대문자로 상수처럼 쓰는 것이 관례
const SET_DIFF = 'counter/SET_DIFF'; 
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//2. 액션생성함수 작성 - 액션타입 개수와 같음 - 내보내서 컴포넌트가 액션 사용
export const setDiff = diff => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//3. 초기값 작성
const initialState = {
    number: 0, //화면에 출력될 숫자
    diff: 1 //증감될 수치 - 초기값을 1로 처리
}

//4. 리듀서 작성 - 기본값으로 내보내져야 할 함수
export default function counter(state = initialState, action){
    //상태 업데이트 로직 분리
    switch (action.type){
        case SET_DIFF:
            return {
                ...state, //diff외에 나머지는 그대로 가져오는 나머지패턴
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