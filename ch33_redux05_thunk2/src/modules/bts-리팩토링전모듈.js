// 방탄소년단 데이터 관리할 리덕스 모듈
// promise를 통해 비동기적으로 만드는 리덕스 모듈 : 로딩중, 성공, 실패

// 0. API 데이터 호출
import * as btsAPI from '../apis/bts';
// * 은 내보내는 모든 변수와 함수를 담아옴
// as 뒤에 btsAPI는 별칭을 처리 : btsAPI.함수명

// 1. 액션타입생성
// 1-1. 방탄소년단 전체 조회하기
const GET_BTS = 'GET_BTS'; 
const GET_BTS_SUCCESS = 'GET_BTS_SUCCESS'; //성공
const GET_BTS_ERROR = 'GET_BTS_ERROR'; //실패

// 1-2. 방탄소년단 한명 조회하기
const GET_BT = 'GET_BT';
const GET_BT_SUCCESS = 'GET_BT_SUCCESS';
const GET_BT_ERROR = 'GET_BT_ERROR';


// 2. 액션생성함수 - 비동기 데이터는 thunk함수를 사용
// 함수는 한개를 선언해도 함수내부에 로딩중, 성공, 실패로 명령이 나뉘어야 함
export const getBts = () => async dispatch => {
    dispatch({type: GET_BT}) // 로딩 시작)
    try {
        const bt = await btsAPI.getBts(); // 로딩중
        dispatch({type: GET_BT_SUCCESS, bt}) // 성공 확인
    } catch(e){
        dispatch({type: GET_BT_ERROR, error: e}); // 에러처리
    }
}

// 3. 초기값 지정 - 로딩중, 성공, 실패로 나눠서 초기값 처리
const initialState = { // 전체 목록 데이터
    bts: {
        loading: false, // 로딩 중일 때는 true변
        data: null, // 초기에는 데이터가 없으므로 null
        error: null // 초기에도 에러가 없으므로 null
    },
    bt: { // 각각 목록 데어터!
        loading: false,
        data: null,
        error: null
    }
};




// 4. 리듀서 선언
export default function bts(state=initialState, action){
    switch(action.type){
        case GET_BTS:
            return {
                ...state, // bt는 변경이 없음
                bts:{
                    loading: true, // 현재는 로딩중이라 true로 변경
                    data: null,
                    error: null
                }
            }
        case GET_BTS_SUCCESS:
            return {
                ...state, // bt는 변경이 없음
                bts:{
                    loading: false, // 로딩은 끝난 상태
                    data: action.bts, // 데이터 가져오기 성공
                    error: null // 에러는 없음
                }
            }
        case GET_BTS_ERROR:
            return {
                ...state, // bt는 변경이 없음
                bts:{
                    loading: false, // 로딩은 끝난 상태
                    data: null, // 데이터 가져오기 실패
                    error: action.error // 에러가 발생
                }
            }
        case GET_BT:
            return {
                ...state, // bts는 변경이 없음
                bt:{
                    loading: true, // 로딩 중이라 true
                    data: null, // 데이터 가져오기 실패
                    error: null // 에러 발생
                }
            }
        case GET_BT_SUCCESS:
            return {
                ...state, // bts는 변경이 없음
                bt:{
                    loading: false, // 로딩이 완료된 상태
                    data: action.bt, // 각각 멤버별로 데이터 반환
                    error: null // 에러는 없음
                }
            }
        case GET_BT_ERROR:
            return {
                ...state, // bts는 변경이 없음
                bt:{
                    loading: false, // 로딩이 완료된 상태
                    data: null, // 데이터 가져오기 실패
                    error: action.error // 에러 발생
                }
            }
        default:
            return state;
    }
}