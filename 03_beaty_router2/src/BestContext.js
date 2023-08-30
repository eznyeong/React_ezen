import React, { createContext, useContext, useReducer } from "react";

//ContextAPI를 통해서 데이터 전역에서 관리 - 17버전부터 좋아짐
//useReducer를 사용할 거라 React불러오기

const initialBests = [
  {
    id: 1,
    name: "정샘물 에센셜 스킨 누더 쿠션(리필 포함)",
    price: 42000,
    descript:
      "정샘물식 투명 피부, 내추럴 누드 쿠션 미백, 주름개선, 자외선 차단(SPF50+ / PA+++) 기능성 화장품",
    image:
      " http://www.jsmbeauty.com/shopimages/jsmbeauty/003002000016.jpg?1631755479",
    like: false
  },
  {
    id: 2,
    name: "정샘물 스킨 누더 커버레이어 쿠션(리필 포함)",
    price: 42000,
    descript:
      "섬세하게 밀착되는 누더 커버 쿠션 미백, 주름개선, 자외선 차단(SPF50+ / PA+++) 기능성 화장품",
    image:
      "http://www.jsmbeauty.com/shopimages/jsmbeauty/003002000082.jpg?1642983720",
    like: false
  },
  {
    id: 3,
    name: "정샘물 립프레션 워터 틴티드 립밤",
    price: 23000,
    descript: "여린 발색, 물 오른 청순톤 입술",
    image:
      "http://www.jsmbeauty.com/shopimages/jsmbeauty/003004000014.jpg?1631756455",
    like: false
  },
  {
    id: 4,
    name: "정샘물 립프레션 글로우래스팅 틴트",
    price: 25000,
    descript: "끈적임 없이 유리알 광택을 연출하는 글로우 틴트",
    image:
      "http://www.jsmbeauty.com/shopimages/jsmbeauty/003004000017.jpg?1662528516",
    like: false
  },
  {
    id: 5,
    name: "정샘물 아티스트 브로우 포마드",
    price: 20000,
    descript: "또렷한 인상을 완성하는 브로우 포마드",
    image:
      "http://www.jsmbeauty.com/shopimages/jsmbeauty/003003000028.jpg?1635731611",
    like: false
  },
  {
    id: 6,
    name: "정샘물 스타일 업 래쉬 마스카라",
    price: 25000,
    descript: "아티스트 C컬로 스타일을 업그레이드 하다",
    image:
      "http://www.jsmbeauty.com/shopimages/jsmbeauty/003003000025.jpg?1631756925",
    like: false
  },
  {
    id: 7,
    name: "정샘물 비건 스킨케어, 비긴스",
    price: 25000,
    descript: "정샘물 비건 스킨케어, 비긴스",
    image:
      "http://www.jsmbeauty.com/shopimages/jsmbeauty/003005000068.jpg?1654132883",
    like: false
  },
  {
    id: 8,
    name: "정샘물 에센셜 물 무스 폼 클렌저",
    price: 30000,
    descript: "간편한 버블 폼 타입의 클렌저로 부드럽고 마일드하게 클렌징",
    image:
      "http://www.jsmbeauty.com/shopimages/jsmbeauty/003005000071.jpg?1681719589",
    like: false
  }
];

//데이터생성, 토글, 제거
function BestReducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return state.map((best) => {
        return best.id === action.id ? { ...best, like: !best.like } : best;
      });
    default:
      throw new Error("사용불가능한 액션입니다.");
  }
}

//Context생성
const BestStateContext = createContext();
const BestDispatchContext = createContext();

export function BestProvider({ children }) {
  const [state, dispatch] = useReducer(BestReducer, initialBests);

  return (
    <BestStateContext.Provider value={state}>
      <BestDispatchContext.Provider value={dispatch}>
        {children}
      </BestDispatchContext.Provider>
    </BestStateContext.Provider>
  );
}

//개발자가 Custom Hook 생성
//에러방지 : 데이터가 없을 때 실행이 되지 않도록 에러 방지
export function useBestState() {
  const context = useContext(BestStateContext);
  if (!context) {
    throw new Error("BestProvider를 찾을 수 없습니다.");
  }
  return context;
}
export function useBestDispatch() {
  const context = useContext(BestDispatchContext);
  if (!context) {
    throw new Error("BestProvider를 찾을 수 없습니다.");
  }
  return context;
}
export {initialBests};