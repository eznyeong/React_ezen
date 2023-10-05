import React, { createContext, useContext, useReducer, useRef } from "react";

//초기 데이터 설정을 위한 배열 데이터
const initialBuckets = [
    {
      id: 1, //key처리를 위한 속성
      text: "웹프론트엔드개발자되기", //버킷리스트 텍스트 속성
      chk: true //버킷리스트 실행 여부 - 실제로는 전부 false여야 함
    },
    {
      id: 2,
      text: "유럽여행가기",
      chk: true
    },
    {
      id: 3,
      text: "서울에 집사기",
      chk: false
    },
    {
      id: 4,
      text: "영국가서 손흥민 축구보기",
      chk: false
    },
    {
      id: 5,
      text: "스위스가서 시계사기",
      chk: false
    }
];
  
//리듀서 선언
//state 중 업데이트되는 로직만 빼는 곳
function BucketReducer(state, action){
  //state : 관리할 데이터
  //action : 컴포넌트에 전달할 명령

  //명령을 분류하기 위해 switch구문 작성
  switch (action.type){
    case 'CREATE':
      return state.concat(action.bucket);
    case 'TOGGLE':
      return state.map(bucket => bucket.id === action.id ? {...bucket, chk: !bucket.chk} : bucket);
    case 'REMOVE':
      return state.filter(bucket => bucket.id !== action.id);
    default:
      //return state; //기존 값으로 처리
      throw new Error('없는 액션입니다.');
  }
}

//Context생성 - state를 관리하는 것 1개, dispatch를 관리하는 것 1개, Ref값을 관리하는 것 1개
const BucketStateContext = createContext(); 
const BucketDispatchContext = createContext();
const BucketNextIdContext = createContext();


//Context에서 사용할 제공자 컴포넌트
export function BucketProvider({children}){ 
  //리듀서를 통한 state선언
  //state : 현재 상태값
  //dispatch : 업데이트될 상태값(setState)
  const [state, dispatch] = useReducer(BucketReducer, initialBuckets);

  //ref호출
  const nextId = useRef(6); //마지막 다음 번호


  //컴포넌트가 갖고 있는 자손들은 모두 데이터를 사용하도록 props.children처리
  //컨텍스트를 제공자 컴포넌트로 처리하고 children를 감싸줌
  return (
    <BucketStateContext.Provider value={state}>
      <BucketDispatchContext.Provider value={dispatch}>
        <BucketNextIdContext.Provider value={nextId}>
          {children}
        </BucketNextIdContext.Provider>
      </BucketDispatchContext.Provider>
    </BucketStateContext.Provider>
  ); 
}

//Custom Hooks를 생성해서 각각의 컴포넌트에 불러오기
//useContext()로 각각의 컴포넌트에서 데이터를 조회해도 됨
//이 문법을 Custom Hooks로 만들어서 내보낼 예정
//혹시 context 데이터가 오지 않을 경우를 대비해서 강제에러발생시키기
export function useBucketState(){
  const context = useContext(BucketStateContext);
  if(!context){ //데이터가 없다면
    throw new Error('BucketStateContext를 찾을 수 없음');
  }
  return context; //에러 없으면 데이터 반환
}
export function useBucketDispatch(){
  const context = useContext(BucketDispatchContext);
  if(!context){ //데이터가 없다면
    throw new Error('BucketDispatchContext를 찾을 수 없음');
  }
  return context; //에러 없으면 데이터 반환
}
export function useBucketNextId(){
  const context = useContext(BucketNextIdContext);
  if(!context){ //데이터가 없다면
    throw new Error('BucketNextIdContext를 찾을 수 없음');
  }
  return context; //에러 없으면 데이터 반환
}