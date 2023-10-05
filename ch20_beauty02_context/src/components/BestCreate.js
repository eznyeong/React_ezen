import React, { useState } from 'react';
import '../scss/bestcreate.scss';
import { MdAdd } from "react-icons/md";

//context에서 dispatch, nextid도 가져옴
import { useBestDispatch, useBestNextId } from '../BestContext';

//입력폼과 추가버튼을 담는 컴포넌트
function BestCreate() {
    //폼 오픈관련 state선언
    const [open, setOpen] = useState(false); //열리지 않은 상태

    //클릭 이벤트 함수
    const onToggle = () => setOpen(!open);

    //state를 통해서 입력폼데이터 관리
    const [values, setValues] = useState({
        name: '',
        price: '',
        descript: '',
        image: ''
    });

    //values비구조화할당 처리
    const {name, price, descript, image} = values;

    //change 이벤트 함수
    const onDataChange = (e) => {
        //e.target의 비구조화할당
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    //context조회
    const dispatch = useBestDispatch();
    const nextId = useBestNextId();

    //전송이벤트 함수
    const onSubmit = (e) => {
        e.preventDefault();

        //새로운 상품을 담는 dispatch처리
        dispatch({
            type: 'CREATE',
            best: {
                id: nextId.current,
                name, //속성명과 값변수가 같으면 한번만 작성
                price,
                descript,
                image,
                like: false
            }
        });

        //전송버튼 클릭 시 입력폼 데이터 비움
        setValues({
            name: '',
            price: '',
            descript: '',
            image
        });

        //입력폼닫기
        setOpen(false);

        //id값 증가
        nextId.current += 1;
    }
    
    return (
        <>
            {/* submit이벤트는 폼태그에만 적용 */}
            <form 
                className={ open ? "createform active" : "createform" }
                onSubmit={(e) => {
                    onSubmit(e); //콜백함수 내부에서 함수호출하다보니 e매개변수를 다시 작성해줘야 함
                    onToggle();
                }}
            >
                <fieldset>
                    <legend>제품 추가하기</legend>
                    {/* label태그의 for속성은 => htmlFor로 교체 */}
                    <label htmlFor="pName">제품명 : </label>
                    <input type="text" id="pName" name="name" value={name} onChange={onDataChange} required />
                    <label htmlFor="pPrice">가격 : </label>
                    <input type="text" id="pPrice" name="price" value={price} onChange={onDataChange} placeholder="숫자로만 입력하세요" required />
                    <label htmlFor="pUrl">이미지경로 : </label>
                    <input type="text" id="pUrl" name="image" value={image} onChange={onDataChange} required />
                    <br />
                    <label htmlFor="pDescript" className="dlabel">설명 : </label>
                    <textarea rows="5" id="pDescript" name="descript" value={descript} onChange={onDataChange} required />
                    <br />
                    <button type="submit">제품추가하기</button>
                </fieldset>
            </form>
            <div className="circlebox" onClick={onToggle}>
                <MdAdd />
            </div>
        </>
    );
}

export default BestCreate;