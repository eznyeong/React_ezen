import React from 'react';
import '../sass/bucketitem.scss';
import { MdDone, MdDelete } from 'react-icons/md';

//리스트 한개를 구현해줄 컴포넌트(체크박스 + 텍스트 + 휴지통아이콘)
function BucketItem({id, text, chk, onToggle, onRemove}) {
    return (
        <div className="bucketitem">
            {/* 체크상태를 활성화처리 하기 위한 active클래스 적용 */}
            <div
                className={chk ? "checkcircle active" : "checkcircle"}
                onClick={() => onToggle(id)}
            >
                <MdDone />
            </div>
            <p>{text}</p>
            <div
                className="remove"
                onClick={() => onRemove(id)}
            >
                <MdDelete />
            </div>
        </div>
    );
}

export default BucketItem;