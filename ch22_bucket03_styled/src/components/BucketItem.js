import React from 'react';
//scss연결삭제
import { MdDone, MdDelete } from 'react-icons/md';

//action명령만 조회하면 됨, 데이터는 부모에서 받아서 props처리
import { useBucketDispatch } from '../BucketContext';

//1. style 호출
import styled, { css } from 'styled-components';

//2. 스타일 컴포넌트 선언 - 요소별로 분리
//2-1. 휴지통 파트 컴포넌트
const RemoveBtn = styled.div`
    position: absolute; right: 0;
    transform: translateY(-50%,50%);
    color: #dee2e6; font-size: 24px;
    cursor: pointer;
    
    display: none; /* 안보이게 처리 */

    &:hover{ color: #ff6b6b; }
`;

//2-2. 아이템 전체 블록
const BucketItemBlock = styled.div`
    position: relative;
    display: flex; align-items: center;
    padding: 12px 0;

    /* 리스트에 마우스 올리면 휴지통 아이콘 보이게 처리 */
    &:hover{
        ${RemoveBtn}{
            display: block;
        }
    }
`;

//2-3. 텍스트 컴포넌트
const TextBlock = styled.p`
    font-size: 21px; color: #495057;

    ${
        props => props.chk &&
        css`
            color: #0593d3; text-decoration: line-through;
        `
    }
`;

//2-4. 체크 아이콘 컴포넌트
const CheckCircleBlock = styled.div`
    display: flex; align-items: center; justify-content: center;
    width: 32px; height: 32px;
    border-radius: 16px; margin-right: 20px;
    border: 1px solid #ced4da;
    font-size: 24px; cursor: pointer;

    & > *{ color: #0593d3; display: none; }

    /* 체크상태 처리 - props로 받아와서 처리 */
    /* props.chk가 true인 경우만 활성처리돼서 짧은 조건문 사용 */
    ${
        props => props.chk && 
        css`
            border-color: #0593d3;
            & > *{ //MdDone
                display: block;
            }
        `
    }
`;


//리스트 한개를 구현해줄 컴포넌트(체크박스 + 텍스트 + 휴지통아이콘)
function BucketItem({id, text, chk}) {
    //custom hooks를 통한 명령 조회
    const dispatch = useBucketDispatch();

    //이벤트함수 처리
    const onToggle = () => dispatch({type: 'TOGGLE', id});
    const onRemove = () => dispatch({type: 'REMOVE', id});

    //3. JSX에 적용
    return (
        <BucketItemBlock>
            {/* 체크 상태를 활성처리하기 위한 chk를 css가 쓰도록 props로 내려줌 */}
            <CheckCircleBlock chk={chk} onClick={() => onToggle(id)}>
                <MdDone />
            </CheckCircleBlock>
            {/* p태그도 활성시 색과 밑줄이 변경돼서 chk값을 props로 받기 */}
            <TextBlock chk={chk}>{ text }</TextBlock>
            <RemoveBtn onClick={() => onRemove(id)}>
                <MdDelete />
            </RemoveBtn>
        </BucketItemBlock>
    );
}

export default BucketItem;