// 버킷리스트를 구현하는 리덕스 모듈(액션, 액션생성함, 리듀서함수를 담은 파일)

// 1. 액션 탑입명 설정 - 다른 리덕스 모듈과 겹치지 않게 '리듀서명/명령작성'
// 다른 변수와 겹치지 않게 액션담는 변수는 대문자로 쓰는것이 관례cio
const CREATE_BUCKET = 'buckets/CREATE_BUCKET';
const TOGGLE_BUCKET = 'buckets/TOGGLE_BUCKET';
const REMOVE_BUCKET = 'buckets/REMOVE_BUCKET';


// 고유 키값 철
let nextId = 6; // 보통은 1로 작성

// 2. 액션 생성 함수 - 액션타입이 개수만금 생성 - 컴포넌트가 바로 가져가기 위해 export처리
export const createBucket = text => ({
    type : CREATE_BUCKET,
    bucket: {
        id: nextId++, // 새항목 추가시 1씩 증가
        text,
        check: false

    }
});

export const toggleBucket = id => ({
    type: TOGGLE_BUCKET,
    id 
})

export const removeBucket = id => ({
    type: REMOVE_BUCKET,
    id 
})

// 3. state초기값 설정 => 리듀서에 담기
const initialState = [
    {
        id: 1,
        text: "웹프론트엔드개발자되기",
        chk: true
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
]

// 4. 리듀서 함수
export default function buckets (state = initialState, action) {
    switch (action.type) {
      case CREATE_BUCKET:
        return state.concat(action.bucket);
      case TOGGLE_BUCKET:
        return state.map((bucket) =>
          bucket.id === action.id ? { ...bucket, chk: !bucket.chk } : bucket
        );
      case REMOVE_BUCKET:
        return state.filter((bucket) => bucket.id !== action.id);
      default:
        return state;
    }
  }