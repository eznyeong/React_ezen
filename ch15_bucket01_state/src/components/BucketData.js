// 초기 데이터 설정을 위한 배열 데이터
const initialBuckets = [
  {
    id: 1, // key처리를 위한 속성
    text: "웹프론트엔드개발자되기", // 버킷리스트 텍스트 속성
    chk: true // 버킷리스트 실행 여부 - 실제로는 전부 false여야 함
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

export { initialBuckets };