import React, { createContext, useContext, useReducer, useRef } from "react";

//Context : 데이터를 전역적으로 사용하려고 작성

//배열 데이터만 담을 js파일
const initialBests = [
    {
        id: 1,
        name: "정샘물 에센셜 스킨 누더 쿠션(리필 포함)",
        price: 42000,
        descript: "정샘물식 투명 피부, 내추럴 누드 쿠션 미백, 주름개선, 자외선 차단(SPF50+ / PA+++) 기능성 화장품",
        image:" http://www.jsmbeauty.com/shopimages/jsmbeauty/003002000016.jpg?1631755479",
        like: false
    },
    {
        id: 2,
        name: "정샘물 스킨 누더 커버레이어 쿠션(리필 포함)",
        price: 42000,
        descript: "섬세하게 밀착되는 누더 커버 쿠션 미백, 주름개선, 자외선 차단(SPF50+ / PA+++) 기능성 화장품",
        image: "http://www.jsmbeauty.com/shopimages/jsmbeauty/003002000082.jpg?1642983720",
        like: false
    }, 
    {
        id: 3,
        name: "정샘물 립프레션 워터 틴티드 립밤",
        price: 23000,
        descript: "여린 발색, 물 오른 청순톤 입술",
        image: "http://www.jsmbeauty.com/shopimages/jsmbeauty/003004000014.jpg?1631756455",
        like: false
    },
    {
        id: 4,
        name: "정샘물 립프레션 글로우래스팅 틴트",
        price: 25000,
        descript: "끈적임 없이 유리알 광택을 연출하는 글로우 틴트",
        image: "http://www.jsmbeauty.com/shopimages/jsmbeauty/003004000017.jpg?1662528516",
        like: false
    },
    {
        id: 5,
        name: "정샘물 아티스트 브로우 포마드",
        price: 20000,
        descript: "또렷한 인상을 완성하는 브로우 포마드",
        image: "http://www.jsmbeauty.com/shopimages/jsmbeauty/003003000028.jpg?1635731611",
        like: false
    }, 
    {
        id: 6,
        name: "정샘물 스타일 업 래쉬 마스카라",
        price: 25000,
        descript: "아티스트 C컬로 스타일을 업그레이드 하다",
        image: "http://www.jsmbeauty.com/shopimages/jsmbeauty/003003000025.jpg?1631756925",
        like: false
    }, 
    {
        id: 7,
        name: "정샘물 비건 스킨케어, 비긴스",
        price: 25000,
        descript: "정샘물 비건 스킨케어, 비긴스",
        image: "http://www.jsmbeauty.com/shopimages/jsmbeauty/003005000068.jpg?1654132883",
        like: false
    }
];


//리듀서 선언 - 업데이트로직을 관리하는 함수
function BestReducer(state, action){
    //state : 관리하는 값
    //action : 업데이트되는 명령
    switch (action.type){
        //명령의 종류를 case로 처리
        case 'CREATE':
            return state.concat(action.best);
        case 'TOGGLE': //하트의 변화
            return state.map(best => {
                return best.id === action.id ? {...best, like: !best.like} : best;
            });
        case 'REMOVE': //삭제
            return state.filter(best => best.id !== action.id);
        default:
            return state; //위에서 제시한 업데이트 로직이 아니면 기존 값 처리
            //강제에러 발생시켜도 됨
    }
}


//context생성 - state를 관리하는 것 1개, dispatch를 관리하는 것 1개, ref를 관리하는 것 1개
const BestStateContext = createContext();
const BestDispatchContext = createContext();
const BestNextIdContext = createContext();


//상태값을 관리할 컴포넌트 생성
export function BestProvider({ children }){ //감싸진 컴포넌트들이 데이터를 전역적으로 사용하게 처리
    //리듀서를 호출하기 - useReducer()
    const [state, dispatch] = useReducer(BestReducer, initialBests);

    //ref값처리
    const nextId = useRef(8); //다음 아이디값을 초기값으로 배정
    
    
    return (
        <BestStateContext.Provider value={state}>
            <BestDispatchContext.Provider value={dispatch}>
                <BestNextIdContext.Provider value={nextId}>
                    {children}
                </BestNextIdContext.Provider>
            </BestDispatchContext.Provider>
        </BestStateContext.Provider>
    );
}

//useContext를 통한 context조회는 각각의 컴포넌트에서 작성해도 됨
//코드를 줄이기 위해서 Custom Hook를 통해 컨텍스트를 조회하는 함수를 생성
export function useBestState(){
    const context = useContext(BestStateContext);
    if(!context){ //컨텍스트가 없다면 - 에러발생중
        throw new Error('BestStateContext가 존재하지 않음');
    }
    return context; //컨텍스트값을 반환
}

export function useBestDispatch(){
    const context = useContext(BestDispatchContext);
    if(!context){ //컨텍스트가 없다면 - 에러발생중
        throw new Error('BestDispatchContext가 존재하지 않음');
    }
    return context; //컨텍스트값을 반환
}

export function useBestNextId(){
    const context = useContext(BestNextIdContext);
    if(!context){ //컨텍스트가 없다면 - 에러발생중
        throw new Error('BestNextIdContext가 존재하지 않음');
    }
    return context; //컨텍스트값을 반환
}

