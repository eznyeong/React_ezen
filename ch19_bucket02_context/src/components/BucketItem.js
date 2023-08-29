import React from 'react';
import '../sass/bucketitem.scss';
import { MdDone, MdDelete } from 'react-icons/md';

// action명령만 조회하면 됨
import { useBucketDispatch } from '../BucketContext';

//리스트 한개를 구현해줄 컴포넌트(체크박스 + 텍스트 + 휴지통아이콘)
function BucketItem({id, text, chk}) {
    // custom hooks를 통한 명령 조회
    const dispatch = useBucketDispatch();

    // 이벤트함수 처리
    const onToggle = () => dispatch({type: 'TOGGLE', id})
    const onRemove = () => dispatch({type: 'REMOVE', id})

    return (
        <div className="bucketitem">
            {/* 체크 상태를 활성처리하기 위한 active클래스 적용 */}
            <div 
                className={chk ? "checkcircle active" : "checkcircle"}
                onClick={() => {onToggle(id)}}
            >
                <MdDone />
            </div>
            <p>{text}</p>
            <div className="remove" onClick={() => {onRemove(id)}}>
                <MdDelete />
            </div>
        </div>
    );
}

export default BucketItem;