import React from "react";
import styled from "styled-components";

const BucketHeaderBlock = styled.header`
  padding: 48px 32px 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0 0 30px;
    font-size: 36px;
    text-align: center;
    color: #343a40;
  }
  h2 {
    margin-top: 4px;
    color: #868e96;
    text-align: right;
    font-size: 20px;
  }
  p {
    margin-top: 10px;
    color: #0593d3;
    font-size: 20px;
    text-align: right;
    font-weight: bold;
  }
`;

//상단에서 타이틀과 날짜, 남은 할일을 표시해주는 컴포넌트
function BucketHeader({ buckets }) {
  const today = new Date(); //오늘의 날짜와 시간 담는 변수
  const week = ["일", "월", "화", "수", "목", "금", "토"]; //요일문자로 담는 변수

  //각각 년, 월, 일, 요일을 담는 객체
  const dateString = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
    day: today.getDay()
  };

  //비구조화할당 처리
  const { year, month, date, day } = dateString;

  //체크되지 않은 것만 재할당
  const falseChks = buckets.filter((bucket) => !bucket.chk);

  return (
    <BucketHeaderBlock>
      <h1>My Bucket List</h1>
      <h2>
        현재 : {year}년 {month}월 {date}일 {week[day]}요일
      </h2>
      <p>할일 {falseChks.length}개 남음</p>
    </BucketHeaderBlock>
  );
}

export default BucketHeader;
