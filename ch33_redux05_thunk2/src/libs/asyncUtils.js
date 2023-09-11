// 리덕스 모듈에서 중복적으로 나오는 것을 함수화 처리할 리팩토링 js문서

// 1. 액션생성함수 리팩토링
export const createPromiseThunk = (type, promiseCreator) => {
    // type : 로딩, 성공, 실패가 갖고 있는 공통 타입명 - ex) GET_BTS
    // promiseCreator : await 뒤에 붙을 API비동기함수를 대신하는 명칭

    // type의 이름을 각각 변수에 비구조화할당 처리
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return param => async dispatch => {
        dispatch({type, param}) // 로딩 시작)
        try {
            const payload = await promiseCreator(param); // 로딩중
            dispatch({type: SUCCESS, payload}) // 성공 확인
        } catch(e){
            dispatch({type: ERROR, error: e}); // 에러처리
        }
    }
}

// 2. 리듀서에서 사용할 초기데이터 관련 리팩토링
export const reducerUtils = {
    // 초기값, 로딩중, 성공, 실패
    initial : (initialData = null) => ({
        loading: false,
        data: initialData, // null 써도 되지만 다른 데이터를 줄 수도 있어서 매개변수
        error: null
    }),
    loading : (prevState = null) => ({
        loading: true,
        data: prevState, // 원래는 데이터가 없지만, 배정하고 싶을 때 매개변수에 따라 처리
        error: null
    }),
    success : payload => ({
        loading: false,
        data: payload, // bts가 올지 bt가 올지 몰라서 임의의 매개변수 처리
        error: null
    }),
    error : error => ({
        loading: false,
        data: null, // 데이터 가져오기 실패
        error: error
    })
}


// 3. 비동기 리듀서를 리팩토링
export const handleAsyncActions = (type, key) => {
    // type : 액션타입을 담을 매개변수 - ex) GET_BTS
    // key : 데이터처리를 bts로 할지 bt로 할지 알 수 없기 때문에 매개변수로 처리

    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];   

    // 리듀서 리턴
    return (state, action) => {
        switch(action.type){
            case type: // 로딩중인데 GET_BTS일지 GET_BT일지 리덕스 모듈에서 지정
                return {
                    ...state, // bt 혹은 bts가 변경이 없음
                    [key]: reducerUtils.loading()
                }
            case SUCCESS: 
                return {
                    ...state, // bt 혹은 bts가 변경이 없음
                    [key]: reducerUtils.success(action.payload)
                }
            case ERROR: 
                return {
                    ...state, // bt 혹은 bts가 변경이 없음
                    [key]: reducerUtils.error(action.payload)
                }
            default:
                return state;
        }
    }
}