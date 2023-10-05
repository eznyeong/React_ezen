import React from 'react';
import '../sass/bucketlist.scss'
import BucketItem from './BucketItem';

// 아이템들을 모아서 한 번에 보여줄 컴포넌트
// 원래는 데이커개수만큼 map처리
function BucketList({buckets, onToggle, onRemove}) {
    return (
        <div className='bucketlist'>
            {
                buckets.map(bucket => (
                    /* Props Drilling : 데이터를 자손에게 계속 내리 꽂는 현상 */
                    <BucketItem
                        key={bucket.id}
                        id={bucket.id}
                        text={bucket.text}
                        chk={bucket.chk}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                ))
            }
        </div>
    );
}

export default BucketList;