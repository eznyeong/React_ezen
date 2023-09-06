//리덕스모듈 : 액션, 액션생성함수, 리듀서 담는 파일

//1. 액션명지정 - 변수명은 상수처럼 다 대문자로 작성, 타입명 '모듈명/액션명'
const CREATE = 'best/CREATE';
const TOGGLE = 'best/TOGGLE';
const REMOVE = 'best/REMOVE';

//2. 액션생성함수 - 액션명 개수와 같음 - 컴포넌트가 바로 가져다 쓰도록 export처리
let nextId = 8;
export const create = (name, price, descript, image) => ({
    type: CREATE, // 데이터 객체 한 개 처리
    best: {
        id: nextId++,
        name,
        price,
        descript,
        image,
        like: false
    }
})
export const toggle = id => ({
    type: TOGGLE,
    id
});
export const remove = id => ({
    type: REMOVE,
    id
});

//3. 초기 값 설정
const initialState = [
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

//4. 리듀서 함수 선언 - 내보내고, 리덕스모듈 기본파트
export default function bests(state = initialState, action){
    //액션타입별로 명령을 처리
    switch (action.type){
        case CREATE:
            return state.concat(action.best);
        case TOGGLE:
            return state.map(best => {
                return best.id === action.id ? { ...best, like: !best.like } : best;
            })
        case REMOVE:
            return state.filter(best => best.id !== action.id);
        default:
            return state; 
    }
}