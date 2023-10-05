import React, { Children } from 'react';
import '../sass/bucketbox.scss';

// 버킷리스트를 전체적으로 모아주고, 브라우저 가운데 오게 해줄 컴포넌트
// 부모가 내려준 자손은 props.children을 통해 표시해줌
function BucketBox({children}) {
    return (
        <div className='bucketbox'>
            {children}
        </div>
    );
}

export default BucketBox;