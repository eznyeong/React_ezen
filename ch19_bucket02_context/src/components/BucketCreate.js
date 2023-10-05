import React, { useState } from 'react';
import '../sass/bucketcreate.scss';
import { MdAdd } from "react-icons/md";
import { useBucketNextId, useBucketDispatch } from '../BucketContext';

// 입력폼 컴포넌트
function BucketCreate() {
    // 활성/비활성관련 state선언 - 다른 컴포넌트에서 사용하지 않으므로 해당 컴포넌트에 선언
    const [open, setOpen] = useState(false); // 처음엔 열려있지 않으므로 false

    // 클릭이벤트를 통해 토글함수 선언
    const onToggle = () => setOpen(!open);


    // App.js 에서 줬던 value 관리를 해당 컴포넌트에서 처리
    const [value, setValue] = useState(''); // 값을 비워둠

    // 명령 조회
    const dispatch = useBucketDispatch();
    const nextId = useBucketNextId();

    // change 이벤트 함수
    const onDataChange = e => setValue(e.target.value);

    // 데이터 전송함수
    const onSubmit = e => {
        e.preventDefault();

        dispatch({
            type: 'CREATE',
            bucket: { // 리듀서에서 지정한 속성명이라 같게 작성
                id: nextId.current,
                text: value,
                chk: false
            }
        });

        setValue(''); // 데이터 전송후에는 입력폼 데이터 없앰
        setOpen(false); // 이벤트를 따로 처리하지 않고 한번에 처리가 가능

        nextId.current += 1; // 다음 리스트를 위해 1씩 증가
    }


    return (
        <>
            {/* 활성화상태는 CSS에서 적용이 되어야 하므로 클래스로 처리 */}
            <div className={ open ? "createform active" : "createform" }>
                {/* submit 이벤트는 form태그만 갖고 있음 → submit 관련된 이벤트는 form에게 적용 */}
                <form onSubmit={onSubmit}>
                    {/* 폼태그 안에 input태그가 하나면 엔터처리시 submit이벤트가 적용 */}
                    <input 
                        type="text" 
                        placeholder="추가할 버킷리스트를 입력 후, Enter를 누르세요."
                        value={value}
                        onChange={onDataChange}
                    />
                </form>    
            </div>
            <div className='circlebox' onClick={onToggle}>
                <MdAdd />
            </div>   
        </>
    );
}

export default BucketCreate;