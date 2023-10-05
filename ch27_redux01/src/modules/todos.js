//할일 관리 리덕스모듈

// 1. 액션 타입 - '모듈명/액션명'
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// id값 처리할 변수
let nextId = 1;

// 2. 액션 생성 함수
export const addTodo = text => ({
    type: ADD_TODO,
    id: nextId++,
    check: false,
    text
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

// 3. 초기값 state값
const initialState = [
    // 빈 배열로 초기값 지정
    /* 
        {
            id: 아이디값,
            text: 할일내용,
            check: 체크여부
        }
    */
];

// 4. 리듀서 함수
export default function todos(state = initialState, action){
    // 상태 업데이트 로직 생성
    switch(action.type){
        case "ADD_TODO":
            // 기존 state값에 새로운 객체값 추가
            return state.concat( action.todo );
        case "TOGGLE_TODO":
            // check값은 true/false로 교체
            return state.map( todo => todo.id === action.id // 조건
                ? {...todo, check: !todo.check} // 반대값 처리
                : todo ); // 기존값 처리
        default:
            return state;
    }
};