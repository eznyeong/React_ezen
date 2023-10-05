import React from "react";
import BucketItem from "./BucketItem";
import styled from "styled-components";

const BucketListblock = styled.ul`
  padding: 20px 32px 48px;
  overflow-y: auto; /* 리스트 많으면 스크롤바생성 */
`;

//각각의 리스트를 하나로 모아 표시해줄(map()메서드처리할) 컴포넌트
function BucketList({ buckets, onToggle, onRemove }) {

  return (
    <BucketListblock>
      {buckets.map((bucket) => (
        <BucketItem
          key={bucket.id}
          id={bucket.id}
          text={bucket.text}
          chk={bucket.chk}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </BucketListblock>
  );
}

export default React.memo(BucketList);
