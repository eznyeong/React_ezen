import React from 'react';
import BucketItem from './BucketItem';
import { useBucketState } from '../BucketContext'; //context조회하는 custom hooks
import styled from 'styled-components';

const BucketListBlock = styled.div`
    padding: 20px 32px 48px;
    height: 500px;
    overflow-y: auto; /* 리스트 많으면 스크롤바생성 */
`;

//아이템들을 모아서 한번에 보여줄 컴포넌트
//원래는 데이터개수만큼 map처리
function BucketList() {
    //state값을 변수에 처리
    const buckets = useBucketState();

    return (
        <BucketListBlock>
            {
                buckets.map(bucket => (
                    /* Props Drilling : 데이터를 자손에게 계속 내리 꽂는 현상 */
                    <BucketItem
                        key={bucket.id}
                        id={bucket.id}
                        text={bucket.text}
                        chk={bucket.chk}
                    />
                ))
            }
        </BucketListBlock>
    );
}

export default BucketList;