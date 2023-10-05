import React from "react";
import { MdDone, MdDelete } from "react-icons/md";
import styled, { css } from "styled-components";

const RemoveBtn = styled.div`
  position: absolute;
  right: 0;
  transform: translateY(-50%, 50%);
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;

  display: none; /* 안보이게 처리 */

  &:hover {
    color: #ff6b6b;
  }
`;

const BucketItemblock = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px 0;

  /* 리스트에 마우스 올리면 휴지통 아이콘 보이게 처리 */
  &:hover {
    ${RemoveBtn} {
      display: block;
    }
  }
`;

const Text = styled.p`
  font-size: 21px;
  color: #495057;

  ${(props) =>
    props.chk &&
    css`
      color: #0593d3;
      text-decoration: line-through;
    `}
`;

const CheckCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 20px;
  border: 1px solid #ced4da;
  font-size: 24px;
  cursor: pointer;

  & > * {
    color: #0593d3;
    display: none;
  }
  ${(props) =>
    props.chk &&
    css`
      border-color: #0593d3;

      & > * {
        display: block;
      }
    `}
`;

//리스트 한개를 구현해줄 컴포넌트(체크박스 + 텍스트 + 휴지통아이콘)
function BucketItem({ id, text, chk, onToggle, onRemove }) {

  return (
    <BucketItemblock>
      <CheckCircle chk={chk} onClick={() => onToggle(id)}>
        {chk && <MdDone />}
      </CheckCircle>
      <Text chk={chk}>{text}</Text>
      <RemoveBtn onClick={() => onRemove(id)}>
        <MdDelete />
      </RemoveBtn>
    </BucketItemblock>
  );
}

export default React.memo(BucketItem);
