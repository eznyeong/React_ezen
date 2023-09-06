import React, { useState } from 'react';
import { styled, css } from 'styled-components';
import { MdAdd } from "react-icons/md";

//스타일컴포넌트 선언
//1. 버튼 구역 - 전체구역에서 버튼을 사용 - 그래서 먼저 작성
const CicleBox = styled.div`
    position: absolute; right: 16px; bottom: 16px; z-index: 5; 
    width: 80px; height: 80px; cursor: pointer; 
    display: flex; align-items: center; justify-content: center;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
    border-radius: 50%; border: none; outline: none;
    background: #e51a92;
    font-size: 60px; color: white;

    transition: 0.125s all ease-in; /* X자로 회전시 자연스럽게 처리 */

    &:hover{
        background: #ff46b3;
    }
`;

//2. 전체 구역 - 스타일컴포넌트에서 요소를 form으로 잡으면 오류가 발생
const CreateForm = styled.div`
    form{
        position: absolute; bottom: 0;
        width: 100%; padding: 0 10px; box-sizing: border-box; margin-bottom: 10px;

        transform: translateY(100%) scaleY(0);
        transform-origin: center top;
        transition: 0.3s;

        //active 클래스를 주지 않고, open값이 true면 활성처리
        //open값을 props로 받아야 함 - js표현식처리
        ${
            props => props.open && //open값이 true라면
                css`
                    transform: translateY(100%) scaleY(1);

                    & + ${CicleBox}{
                        background: #fa5252;
                        transform: rotate(45deg); /* 회전처리 */
                    }
                `
        }
    } 

    legend{ font-size: 18px; font-weight: bold; }
    fieldset{ padding: 20px; }
    input{ width: 260px; height: 30px; padding: 0 10px; box-sizing: border-box;  margin-bottom: 20px; margin-right: 30px; color: #000; }
    textarea{ width: 601px; margin-bottom: 20px; color: #000; }
    .dlabel{ position: relative; top: -70px; margin-right: 16px; }
    button{ display: block; margin: 0 auto; width: 150px; height: 40px; background-color: #e51a92; color: #fff; border: none; font-size: 16px; line-height: 39px; cursor: pointer; }

    input:focus, textarea:focus{ background-color: lightyellow; }
`;



//입력폼과 추가버튼을 담는 컴포넌트
function BestCreate({onCreate}) {
    //폼 오픈관련 state선언
    const [open, setOpen] = onCreate(false); //열리지 않은 상태

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


    //전송이벤트 함수
    const onSubmit = (e) => {
        e.preventDefault();

        //전송버튼 클릭 시 입력폼 데이터 비움
        setValues({
            name: '',
            price: '',
            descript: '',
            image
        });

        //입력폼닫기
        setOpen(false);

    }
    
    return (
        /* 자손들이 css에서 open값은 받을 수 있도록 props로 내려줌 */
        <CreateForm open={open}>
            {/* submit이벤트는 폼태그에만 적용 */}
            <form 
                /* className삭제 - active관련을 props로 처리 */
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
            <CicleBox onClick={onToggle}>
                <MdAdd />
            </CicleBox>
        </CreateForm>
    );
}

export default BestCreate;