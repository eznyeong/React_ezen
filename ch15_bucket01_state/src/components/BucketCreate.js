import React, { useState } from 'react';
import '../sass/bucketcreate.scss'
import { MdAdd } from "react-icons/md";

// 입력폼 컴포넌트
function BucketCreate({value, onDataChange, onSubmit}) {
    // 활성/비활성 관련 state선언 - 다른 컴포넌트에서 사용하지 않으므로 해당 컴포넌트에 선언
    const [open, setOpen] = useState(false); // 처음엔 열려있지 않으므로 false

    // 클릭 이벤트를 통해 토글 함수 선언
    const onToggle = () => setOpen(!open);

    // 무조건 닫히게 하는 함수 선언
    const onClose = () => setOpen(false);

    return (
        <>
            {/* 활성화 상태는 CSS에서 적용돼야 하므로 클래스로 처리 */}
            <div className={open ? "createform active" : "createform"}>
                {/* submit 이벤트는 form 태그만 갖고 있음 */}
                <form onSubmit={onSubmit}>
                    {/* 폼 태그 안에 input 태그가 하나이면 엔터 처리 시 submit 이벤트가 적용 */}
                    <input
                        type="text"
                        placeholder="추가할 버킷리스트를 입력 후, Enter를 누르세요."
                        value={value}
                        onChange={onDataChange}
                    />
                </form>
            </div>
            <div
                className='circlebox'
                onClick={onToggle}
            >
                <MdAdd />
            </div>
        </>
    );
}

export default BucketCreate;