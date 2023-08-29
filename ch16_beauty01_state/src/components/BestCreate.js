import React, { useState } from 'react';
import '../scss/bestcreate.scss';
import { MdAdd } from "react-icons/md";

//입력폼과 추가버튼을 담는 컴포넌트
function BestCreate({name, price, descript, image, onDataChange, onSubmit}) {
    
    // 폼 오픈관련 state 선언
    const [open, setOpen] = useState(false); // 열리지 않은 상태

    // 클릭 이벤트 함수
    const onToggle = () => {
        setOpen(!open)
    }

    return (
        <>
            <form
                className={open ? "createform active" : "createform"}
                onSubmit={(e) => {
                    onSubmit(e); // 콜백함수 내부에서 함수 호출하다보니 e 매개변수를 다시 작성해줘야 함
                    onToggle();
                }}
            >
                <fieldset>
                    <legend>제품 추가하기</legend>
                    {/* label태그의 for 속성은 → htmlFor로 교체 */}
                    <label htmlFor="pName">제품명 : </label>
                    <input type="text" id="pName" name='name' value={name} onChange={onDataChange} required/>
                    <label htmlFor="pPrice">가격 : </label>
                    <input type="text" id="pPrice" name='price' placeholder="숫자로만 입력하세요" value={price} onChange={onDataChange} required />
                    <label htmlFor="pUrl">이미지경로 : </label>
                    <input type="text" id="pUrl" name='image' value={image} onChange={onDataChange} required />
                    <br />
                    <label htmlFor="pDescript" className="dlabel">설명 : </label>
                    <textarea rows="5" id="pDescript" name='descript' value={descript} onChange={onDataChange} required />
                    <br />
                    <button type="submit">제품추가하기</button>
                </fieldset>
            </form>
            <div
                className='circlebox'
                onClick={onToggle}
            >
                <MdAdd />
            </div>
        </>
    );
}

export default BestCreate;