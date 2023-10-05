import React from 'react';
import BtContainer from '../containers/BtContainer';
import { useParams } from 'react-router-dom'; //url의 파라미터를 정보를 받는 Hooks

//각각 멤버를 표시할 페이지를 나타내는 컴포넌트
function BtPage() {
    const { id } = useParams(); //url에서 파라미터정보 받아오는 Hooks

    return (
        <BtContainer btId={parseInt(id,10)} />
    );
}

export default BtPage;