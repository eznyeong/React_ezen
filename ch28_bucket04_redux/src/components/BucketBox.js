import React from "react";
import styled from "styled-components";
import BucketHeader from "./BucketHeader";
import BucketList from "./BucketList";
import BucketCreate from "./BucketCreate";

const BucketBoxBlock = styled.div`
  width: 512px;
  height: 768px;
  overflow: hidden;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

//모든 요소를 감싸고 흰색 영역을 줄 컴포넌트
function BucketBox({ buckets, onCreate, onToggle, onRemove }) {
  return (
    <BucketBoxBlock>
      <BucketHeader buckets={buckets} />
      <BucketList buckets={buckets} onToggle={onToggle} onRemove={onRemove} />
      <BucketCreate onCreate={onCreate} />
    </BucketBoxBlock>
  )
}

export default React.memo(BucketBox);
