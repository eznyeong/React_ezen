import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import styled, { css } from "styled-components";

const CircleBoxBlock = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 5;
  width: 80px;
  height: 80px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border: none;
  outline: none;
  background: #0593d3;
  font-size: 60px;
  color: white;

  transition: 0.125s all ease-in; /* X자로 회전시 자연스럽게 처리 */

  &:hover {
    background: #36bffc;
  }
`;

const CreateFormBlock = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
  transform: translateY(100%);
  transition: 0.2s;

  ${(props) =>
    props.open &&
    css`
      transform: translateY(0);

      & + ${CircleBoxBlock} {
        background: #fa5252; /* 회전되서 빨간색X */
        transform: rotate(45deg); /* 회전처리 */
      }
    `}

  form {
    background: #f8f9fa;
    padding: 32px 112px 36px 32px;
    border-radius: 0 0 16px 16px;
    border-top: 1px solid #e9ecef;
  }
  input {
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid #dee2e6;
    outline: none;
    font-size: 16px;
  }
`;

//하단에 리스트를 추가해줄 폼영역과 버튼을 구현해줄 컴포넌트
function BucketCreate({ onCreate }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const onToggle = () => setOpen(!open);
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();


    // props받은 명령으로 변경
    onCreate(value);

    setValue("");
    setOpen(false);
  };

  return (
    <>
      <CreateFormBlock open={open}>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="추가할 버킷리스트를 입력 후, Enter를 누르세요."
            onChange={onChange}
            value={value}
          />
        </form>
      </CreateFormBlock>
      <CircleBoxBlock open={open} onClick={onToggle}>
        <MdAdd />
      </CircleBoxBlock>
    </>
  );
}

export default BucketCreate;
