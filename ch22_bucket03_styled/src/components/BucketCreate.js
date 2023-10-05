import React, { useState } from 'react';
import { MdAdd } from "react-icons/md";
import { useBucketDispatch, useBucketNextId } from '../BucketContext';

//1. styled 호출
import styled, { css } from 'styled-components';

//2. 스타일 컴포넌트 - 요소 분리
//2-1. 버튼 파트
const CircleBoxBlock = styled.div`
    position: absolute; right: 16px; bottom: 16px; z-index: 5; 
    width: 80px; height: 80px; cursor: pointer; 
    display: flex; align-items: center; justify-content: center;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
    border-radius: 50%; border: none; outline: none;
    background: #0593d3;
    font-size: 60px; color: white;

    transition: 0.125s all ease-in; /* X자로 회전시 자연스럽게 처리 */

    &:hover{
        background: #36bffc;
    }
`;

//2-2. 폼 파트 - form태그는 styled 적용시 에러 발생
const CreateFormBlock = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
    transform: translateY(100%);
    transition: 0.2s;

    /* 활성상태 - props처리 */
    ${
        props => props.open &&
        css`
            transform: translateY(0); //원래 위치로 돌아오게 처리

            & + ${CircleBoxBlock}{
                background: #fa5252; //빨간색 처리
                transform: rotate(45deg); //45도 회전
            }
        `
    }

    form{
        background: #f8f9fa;
        padding: 32px 112px 36px 32px;
        border-radius: 0 0 16px 16px;
        border-top: 1px solid #e9ecef;
    }
    input{
        width: 100%; padding: 12px;
        border-radius: 4px; box-sizing: border-box;
        border: 1px solid #dee2e6;
        outline: none; font-size: 16px;
    }
`;

//입력폼 컴포넌트
function BucketCreate() {
    //활성/비활성관련 state선언 - 다른 컴포넌트에서 사용하지 않으므로 해당 컴포넌트에 선언
    const [open, setOpen] = useState(false); //처음엔 열려 있지 않으므로 false

    //클릭이벤트를 통해 토글함수 선언
    const onToggle = () => setOpen(!open);

    //App.js에서 했던 value관리를 해당 컴포넌트에서 처리
    const [value, setValue] = useState(''); //값을 비워둠

    //명령 조회
    const dispatch = useBucketDispatch();
    const nextId = useBucketNextId();

    //change이벤트 함수
    const onDataChange = e => setValue(e.target.value);

    //데이터 전송함수
    const onSubmit = e => {
        e.preventDefault();

        dispatch({
            type: 'CREATE',
            bucket: { //리듀서에서 지정한 속성명이라 같게 작성
                id: nextId.current,
                text: value,
                chk: false
            }
        });

        setValue(''); //데이터 전송후에는 입력폼데이터 없앰
        setOpen(false); //이벤트를 따로 처리하지 않고 한번에 처리가 가능

        nextId.current += 1; //다음 리스트를 위해 1씩 증가
    }


    return (
        <>
            {/* 활성화상태는 CSS에서 적용돼야 하므로 open을 props로 내려주기 */}
            <CreateFormBlock open={open}>
                {/* submit이벤트는 form태그만 갖고 있음 */}
                <form onSubmit={onSubmit}>
                    {/* 폼태그 안에 input태그가 하나면 엔터처리시 submit이벤트가 적용 */}
                    <input
                        type="text"
                        placeholder="추가할 버킷리스트를 입력 후, Enter를 누르세요."
                        value={value}
                        onChange={onDataChange}
                    />
                </form>
            </CreateFormBlock>
            <CircleBoxBlock onClick={onToggle}>
                <MdAdd />
            </CircleBoxBlock>
        </>
    );
}

export default BucketCreate;