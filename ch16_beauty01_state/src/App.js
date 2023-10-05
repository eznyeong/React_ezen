import React, { useRef, useState } from 'react';
import BestBox from './components/BestBox';
import Title from './components/Title';
import BestCreate from './components/BestCreate';
import BestList from './components/BestList';
import {initialBests} from './components/bestdata';


function App() {
  // 데이터를 state 선언
  const [bests, setBests] = useState(initialBests); // 초기데이터 지정

  // like 데이터 변경 이벤트 함수
  const onToggle = id => {
    setBests(
      bests.map(best => {
        return best.id === id ? {...best, like: !best.like} : best
      })
    )
  }
  

  // 삭제 이벤트 함수
  const onRemove = id => {
    setBests(
      bests.filter(best => best.id !== id)
    )
  }

  // 입력 상
  const [values, setValues] = useState({
    name: '',
    price: '',
    descript: '',
    image: ''
  })

  // state가 객체니까 비구조화할당 처리
  const { name, price, descript, image } = values;

  // id값 배정 = ref 사용
  const nextId = useRef(8); // 7번까지 있어서 다음 번호 배정

  // change 이벤트를 통한 입력상자 값 변환
  const onDataChange = e => {
    // e.target - 비구조화할당 처리
    const { name, value } = e.target;
    // state 값 변경
    setValues({
      ...values, // 안바뀌는 값 복제해오기
      [name] : value // 코드블록 밖의 변수를 내부에서 참조할 때 대괄호 작성하는 것이 문법
    })
  }

  // submit 이벤트 함수
  const onSubmit = e => {
    e.preventDefault(); // 기본 이벤트 전송 방지
    
    // 새로운 상품 데이터 담는 객체 선언
    const best = {
      id: nextId.current, // 데이터가 추가되면 번호가 증가돼서 현재 값 처리
      name,
      price,
      descript,
      image,
      like: false // 초기값 배정
    }
    // bests의 데이터 변경
    setBests([...bests, best]) // 기존 배열 데이터에 best 값 추가
   
    // 전송되고 나면 입력폼 데이터는 빈 문자열 처리
    setValues({
      name: '',
      price: '',
      descript: '',
      image: '',
    })

    // id값도 1을 증가
    nextId.current += 1; // 다음 상품 추가를 위해 1 증가
  }

  return (
    <BestBox>
      <Title name="BEST PRODUCT" />
      <BestList bests={bests} onToggle={onToggle} onRemove={onRemove} />
      <BestCreate name={name} price={price} descript={descript} image={image} onDataChange={onDataChange} onSubmit={onSubmit} />
    </BestBox>
  );
}

export default App;