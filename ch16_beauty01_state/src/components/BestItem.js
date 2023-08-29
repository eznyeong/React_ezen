import React from 'react';
import '../scss/bestitem.scss';
import { TbTrashXFilled } from "react-icons/tb";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

//리스트 한개를 구현할 컴포넌트
function BestItem({id, name, price, descript, image, like, onToggle, onRemove}) {
    return (
        <li>
            {/* React는 페이지 이동이 없는 SPA 방식이라서 a태그에 임시링크 #만 주면 경로나 에러 발생 */}
            {/* 그래서 */}
            <a htef="#!" >
                <img src={image} alt={name} />
                <div
                    className='likebox'
                    onClick={()=>{onToggle(id)}}
                >
                    {like ? <AiFillHeart /> : <AiOutlineHeart />}
                </div>
                <div className='box'>
                    <h4>{name}</h4>
                    <h5>\ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
                    <p>{descript}</p>
                    <TbTrashXFilled onClick={() => {onRemove(id)}} />
                </div>
            </a>
        </li>
    );
}

export default BestItem;