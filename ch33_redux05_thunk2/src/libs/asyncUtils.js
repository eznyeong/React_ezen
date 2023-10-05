//리덕스 모듈에서 중복적으로 나오는 것을 함수화 처리할 리팩토링 js문서

//1. 액션생성함수 리팩토링
//1-1. 전체 목록 표시에만 처리
export const createPromiseThunk = (type, promiseCreator) => {
    //type : 로딩중, 성공, 실패가 갖고 있는 공통 타입명 - ex) GET_BTS
    //promiseCreator : await 뒤에 붙을 API비동기함수를 대신하는 명칭

    //type의 이름을 각각 변수에 비구조화할당 처리
    const [SUCCESS,ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return param => async dispatch => {
        dispatch({ type, param }); //로딩 시작
        try{
            const payload = await promiseCreator(param); //로딩 중
            dispatch({ type: SUCCESS, payload }); //성공 확인
        }catch(e){
            dispatch({ type: ERROR, error: e }); //에러 처리
        }
    }
}
// 1-2. 각각 데이터에 처리하는 thunk 함수
const defaultSelector = param => param; // 각각의 주소 파라미터 받아오기
export const createPromiseThunkId = (
        type, // 로딩중, 성공, 실패가 갖고 있는 공통 타입명 - ex) GET_BTS
        promiseCreator, //await 뒤에 붙을 API비동기함수를 대신하는 명칭
        idSelector = defaultSelector
    ) => {
    

    //type의 이름을 각각 변수에 비구조화할당 처리
    const [SUCCESS,ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    // 이 함수가 promiseCreator가 단 하나의 파라미터만 받는다는 전제하에 작성
    // 주소 파라미터가 여러 개면 객체타입으로 여러 파라미터를 받아와야 함
    // ex : writeComment({ btId: 1, text: '댓글내용' })
    return param => async dispatch => {
        const id = idSelector(param);

        dispatch({ type, meta: id }); //로딩 시작
        try{
            const payload = await promiseCreator(param); //로딩 중
            dispatch({ type: SUCCESS, payload, meta: id }); //성공 확인
        }catch(e){
            dispatch({ type: ERROR, error: e, meta: id }); //에러 처리
        }
    }
}

//2. 리듀서에서 사용할 초기데이터 관련 리팩토링
export const reducerUtils = {
    //초기값, 로딩중, 성공, 실패
    initial : (initialData = null) => ({
        loading: false, 
        data: initialData, //null써도 되지만 다른 데이터를 줄 수도 있어서 매개변수 처리
        error: null
    }),
    loading: (prevState = null) => ({
        loading: true, //로딩중 처리
        data: prevState, //원래는 데이터가 없지만, 배정하고 싶을 때 매개변수에 처리
        error: null
    }),
    success: payload => ({
        loading: false, //로딩 완료
        data: payload, //bts올지 bt가 올지몰라서 임의의 매개변수 처리
        error: null
    }),
    error: error => ({
        loading: false, //로딩 완료
        data: null, //데이터 가져오기 실패
        error: error
    })
}

//3. 비동기 리듀서를 리팩토링
//3-1. 전체 목록 리듀서
export const handleAsyncActions = (type, key, keepData = false) => {
    //type : 액션타입을 담을 매개변수 - ex) GET_BTS
    //key : 데이터처리를 bts로 할지, bt로 할지 알수 없기 때문에 매개변수로 처리
    //keepData : 재로딩 관련을 처리할 매개변수

    const [SUCCESS,ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    //리듀서를 리턴
    return (state, action) => {
        switch(action.type){
            case type: //로딩중인데 GET_BTS일지 GET_BT일지는 리덕스 모듈에서 지정
                return {
                    ...state, //bt 혹은 bts가 변경이 없음
                    [key]: reducerUtils.loading(keepData ? state[key].data : null )
                }
            case SUCCESS: 
                return {
                    ...state, //bt 혹은 bts가 변경이 없음
                    [key]: reducerUtils.success(action.payload)
                }
            case ERROR:
                return {
                    ...state, //bt 혹은 bts가 변경이 없음
                    [key]: reducerUtils.error(action.payload)
                }
            default:
                return state;
        }
    }
}

//3-2. 각각 목록 리듀서
export const handleAsyncActionsId = (type, key, keepData = false) => {
    //type : 액션타입을 담을 매개변수 - ex) GET_BTS
    //key : 데이터처리를 bts로 할지, bt로 할지 알수 없기 때문에 매개변수로 처리
    //keepData : 재로딩 관련을 처리할 매개변수

    const [SUCCESS,ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    //리듀서를 리턴
    return (state, action) => {
        // 아이디 받는 변수
        const id = action.meta;

        switch(action.type){
            case type: //로딩중인데 GET_BTS일지 GET_BT일지는 리덕스 모듈에서 지정
                return {
                    ...state, //bt 혹은 bts가 변경이 없음
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.loading(
                            // state[key][id]가 만들어져 있지 않을수도 있어서 유효성 먼저 할 것
                            keepData ? state[key][id] && state[key][id].data : null
                        )
                    }
                }
            case SUCCESS: 
                return {
                    ...state, //bt 혹은 bts가 변경이 없음
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.success(action.payload)
                    }
                }
            case ERROR:
                return {
                    ...state, //bt 혹은 bts가 변경이 없음
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.error(action.payload)
                    }
                }
            default:
                return state;
        }
    }
}