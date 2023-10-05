import React, { useRef, useState } from 'react';
import './App.css'
import BucketBox from './components/BucketBox';
import BucketHeader from './components/BucketHeader';
import BucketList from './components/BucketList';
import BucketCreate from './components/BucketCreate';
import {initialBuckets} from './components/BucketData'

// 최종적으로 컴포넌트 가져오는 파일
function App() {
  // state 선언 - 보통 데이터는 props로 부모가 자손에게 내려줌
  // 자손이 부모에게 올려주진 않음, 형제끼리도 전달 불가능
  const [buckets, setBuckets] = useState(initialBuckets); // 초기 데이터 담기

  // 결과적으로 데이터가 변경되므로 state를 갖은 부모쪽에서 처리 후 내려줘야 함
  // 체크모양 클릭 이벤트 함수
  const onToggle = (id) => {
    setBuckets(
      buckets.map(bucket => {
        return bucket.id === id ?
          { ...bucket, chk: !bucket.chk } : bucket;
      })
    )
  }

  // 휴지통 모양 클릭 시 삭체 처리하는 이벤트 함수
  const onRemove = (id) => {
    setBuckets(
      buckets.filter(bucket => bucket.id !== id));
  }

  // 입력 폼 관련 코드
  // 1. input태그의 value값을 state선언
  const [value, setValue] = useState(''); // 초기값은 비워두기

  // 2. 배열 데이터의 id값에 줄 고정 수치 - ref를 통해 처리
  const nextId = useRef(6); // 5번 다음 수치를 지정

  // 3. change 이벤트를 통해 value값 변경하기
  const onDataChange = (e) => {
    setValue(e.target.value);
  }

  // 4. submit 이벤트를 통한 데이터 추가하기
  const onSubmit = (e) => {
    e.preventDefault(); // 데이터 전송 방지

    // 새로운 데이터를 객체로 담기
    const bucket = {
      id: nextId.current, // ref를 통해 준 데이터의 현재 값
      text: value, // input에서 작성한 value값
      chk: false // 무조건 false로 시작
    }

    // 기존 buckets에 추가하기
    setBuckets(...buckets, bucket);
    setValue(''); // input value 비우기
    nextId.current += 1; // 그 다음 데이터 추가를 위해 id값 변경
  }

  return (
    <div>
      <BucketBox>
        <BucketHeader buckets={buckets} />
        <BucketList buckets={buckets} onToggle={onToggle} onRemove={onRemove} />
        <BucketCreate value={value} onDataChange={onDataChange} onSubmit={onSubmit} />
      </BucketBox>
    </div>
  );
}

export default App;