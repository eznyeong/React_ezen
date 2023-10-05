import React from 'react';

// 부모 컴포넌트 : Child03을 자손으로 불러온 적이 없음
// 상위 컴포넌트에서 자손으로 내려줌
// props: 컴포넌트가 갖고 있는 속성 객체
// 속성들은 개발자가 생성
// props.children : 개발자가 만들지 않아도 내장되어 있는 속성

/* function Parent03(props) {
    return (
        <div>
            <h2>Parent03 컴포넌트</h2>
            {props.children}
        </div>
    );
} */

// const { children } = props;
// 매개변수에는 변수 키워드 안씀
// children 속성은 Grand03이임의적으로 자손 컴포넌트로 처리했을 때 사용하는 속성
function Parent03(children) {
    return (
        <div>
            <h2>Parent03 컴포넌트</h2>
            {children}
        </div>
    );
}

export default Parent03;