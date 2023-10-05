import React from 'react';

// 방탄소년단 한명한명의 데이터를 표시하는 컴포넌트
//key는 자손컴포넌트가 props로 가져올 수는 없음, 부모컴포넌트가 자손컴포넌트를 독자적으로 구분짓기 위해 사용
function Bt01({name, num}) {
    return <li>멤버{num+1} : {name}</li>;
}

export default Bt01;