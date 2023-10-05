import React from 'react';
import '../scss/bestbox.scss';

//모든 요소를 감싸고 가운데 영역으로 모아 줄 컴포넌트
function BestBox({children}) {
    return <div className="bestbox">{children}</div>;
}

export default BestBox;