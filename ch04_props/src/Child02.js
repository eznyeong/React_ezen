import React from "react";

// 자손 컴포넌트
// 재사용 가능한 UI : 이름을 매번 다르게 처리
// 컴포넌트의 매개변수로 props라는 객체가 선언되어 있음
// JSX에서 표현식을 통해서 props.속성명

// props를 여러번 작성하는 불편함이 생김
// props는 부모컴포넌트가 내려주는 값을 의미하는 객체

/*
function Child02(props) {
  return (
    <div>
      <h3>이름 : {props.name}</h3>
      <h3>출생 : {props.birth}</h3>
      <h3>그룹명 : {props.group}</h3>
    </div>
  );
*/

// 비구조화할당 처리 : 배열이나 객체값을 각각의 변수에 해체해서 담는 방식
// const { ex01, ex02, ex03 } = 객체명;
// const { name, birth, group } = props;
// 매개변수에는 변수키워드 선언 X
function Child02({name, birth, group}) {
  return (
    <div>
      <h3>이름 : {name}</h3>
      <h3>출생 : {birth}</h3>
      <h3>그룹명 : {group}</h3>
    </div>
  );
}

// defaultProps : 부모에서 값을 내려주지 않아도 기본적으로 값처리
// 1. 부모가 값을 내려주지 않을 수 있어서
// 2. 대다수의 값이 같은 경우

Child02.defaultProps = {
    name: '홍길동',
    birth: '1999. 1. 1.',
    group: '방탄소년단'
}

export default Child02;
