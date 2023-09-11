import React from 'react';
import BtContainers from '../containers/BtContainers';
import { useParams } from 'react-router-dom'; // url에 파라미터 정보를 받는 Hooks 호출

// 각각 멤버를 표시할 페이지를 나타내는 컴포넌트
function BtPage() {
    const { id } = useParams(); // url에서 파라미터 정보 받아오는 hooks
    return (
        <div>
            <BtContainers btId={parseInt(id,10)} />
        </div>
    );
}

export default BtPage;