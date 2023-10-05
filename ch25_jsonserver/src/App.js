import React from 'react';
import BtsAxios from './BtsAxios';

// 데이터베이스 : 자바스프링, 노드서버 - 리액트와 데이터 연결
// 데이터 서버를 따로 구성해서 백엔드 개발자와 협력
// 리액트 코드에서 AZAX를 이용해서 서버에서 데이터를 받아와야 함

// 실제 서버를 구현할 수는 없어서 가상서버를 구성
// 라이브러리 : json-server
// src 폴더 밖에 데이터를 담아줄 폴더 생성
// 가상서버 주소 : http//localhost:4000
// CRA(create-react-app)을 통한 프로젝트와 가상서버를 동시에 실행할 수는 없음
// 터미널을 분할해서 2개를 동시 실행하거나 라이브러리를 설치

// concurrently : CRA와 가상서버를 동시에 실행해주는 라이브러리
// yarn dev : 동시 실행 명령어
// 위 두 라이브러리는 package.json에서 script부분에 명령을 추가해줘야 함

// axios : 서버 통신을 위한 라이브러리
// 이 라이브럴리 없어 fetch API를 통해서도 서버 통신 가능
// 보통 프레임워크들이 ajdax를 구현할 때 axiox를 사용한다고 보면 됨
// axios는 REST API 규약을 따름
// REST API : 데이터 요청을 할 때 사용되는 약속된 규칙
// 웹 주소를 이용해서 서버와 통신하는 방법
// 주소를 입력하는 방법으로는 데이터를 생성, 요청, 변경, 삭제가 있음
// REST API함수
// 1. POST : 데이터 등록 함수
// 2. GET : 데이터 조회
// 3. PUT : 데이터 수정
// 4. DELETE : 데이터 삭제

// axios도 함수를 이에 맞게 생성
// 1. axios.get(url);
// 2. axios.post(url,data);
// 3. axios.put(url,data);
// 4. axios.delete(url);

// axios의 get() 문법
/* axios.get('url') // 데이터 경로, 오픈 API주소처리, 혹은 가상서버주소
.the(function(response){
  // 데이터 가져오기를 성공했을 때
})
.catch(function(error){
  // 에러 시 가져올 데이터
}) */


function App() {
  return (
    <div>
      <BtsAxios />
    </div>
  );
}

export default App;