import React from 'react';
import '../sass/bucketlist.scss';
import BucketItem from './BucketItem';
import { useBucketState } from '../BucketContext'; // context 조회하는 custom hooks

// 아이템들을 모아서 한번에 보여줄 컴포넌트
// 원래는 데이터 개수만큼 map처리
function BucketList() {
    // state값을 변수에 처리
    const buckets = useBucketState();

    return (
        // Props Drilling : 데이터를 자손에게 계속 내리 꽂는 현상
        <div className='bucketlist'>
            {
                buckets.map(bucket => (
                    <BucketItem 
                        key={bucket.id} 
                        id={bucket.id} 
                        text={bucket.text} 
                        chk={bucket.chk} 
                    />
                ))
            }
        </div>
    );
}

export default BucketList;