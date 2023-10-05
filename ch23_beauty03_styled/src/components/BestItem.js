import React from 'react';
import { styled } from 'styled-components';
import { TbTrashXFilled } from "react-icons/tb";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

//dispatch를 조회 - TOGGLE과 REMOVE 명령 조회해서 사용
import { useBestDispatch } from '../BestContext';

//스타일 컴포넌트 지정
//1. hoverbox처리 - 아래 li요소가 가져다 쓸 예정
const HoverBox = styled.div`
    width: 100%; height: 100%; 
    position: absolute; top: 0; left: 0;
    background-color: rgba(0,0,0,0.7);
    text-align: center;
    padding: 30px 20px; box-sizing: border-box;
    opacity: 0; transition: 0.3s;

    h3{ height: 70px; font-size: 30px; line-height: 70px; text-align: center; }
    h4{ height: 70px; font-size: 19px; }
    h5{ height: 50px; font-size: 16px; }
    p{ font-size: 14px; }
    > svg{ 
        position: absolute; left: 0; right: 0; bottom: 20px; margin: 0 auto; 
        width: 20px; height: 20px;
    }
`;

//2. li요소 선택
const BestItemBlock = styled.li`
    float: left; width: 270px; height: 270px; margin: 10px;
    a{ 
        display: block; width: 100%; height: 100%; position: relative;
        &:hover{
            ${HoverBox}{
                opacity: 1;
            }
        }
    }
    img{ display: block; width: 100%; height: 100%; }
`;

//3. likebox 선택
const LikeBox = styled.div`
    position: absolute; right: 8px; top: 8px; z-index: 100;
    > svg{ width: 24px; height: 24px; fill: #e51a92; }
`;


//리스트 한개를 구현할 컴포넌트
function BestItem({id, name, price, descript, image, like}) {
    //dispatch를 담는 변수
    const dispatch = useBestDispatch();

    //이벤트 함수
    const onToggle = () => dispatch({type: 'TOGGLE', id});
    const onRemove = () => dispatch({type: 'REMOVE', id});

    return (
        <BestItemBlock>
            {/* React는 페이지 이동이 없는 SPA방식이라서 a태그에 임시링크 #만 주면 경로나 에러 발생 - 그래서 #!로 처리 */}
            <a href="#!">
                <img src={image} alt={name} />
                <LikeBox onClick={() => onToggle(id)}>
                    { like ? <AiFillHeart /> : <AiOutlineHeart /> }
                </LikeBox>
                <HoverBox>
                    <h4>{name}</h4>
                    <h5>\ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
                    <p>{descript}</p>
                    <TbTrashXFilled onClick={() => onRemove(id)} />
                </HoverBox>
            </a>
        </BestItemBlock>
    );
}

export default BestItem;