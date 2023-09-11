import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBt } from '../modules/bts'; // thunk함수 호출
import Bt from '../components/Bt';
import { useNavigate } from 'react-router-dom';


// 방탄소년단 데이터 한개한개를 받아오는 컨테이너 컴포넌트
function BtContainers({ btId }) {

    const { data, loading, error } = useSelector(state => state.bts.bt)
    const dispatch = useDispatch();

    // 데이터를 가져오는 디스패치 처리 => 초기 데이터는 한번만 호출
    useEffect(() => {
        dispatch(getBt(btId));
    }, [btId, dispatch]);

    if(loading) return <div>로딩중...</div>; // 여긴 원래 로딩중 컴포넌트를 반환
    if(error) return <div>에러발생...</div>; // 여긴 원래 에러페이지 컴포넌트 반환
    if(!data) return null; // 데이터는 잘 왔는데 서버 문제가 있는 경우 - 페이지를 컴포넌트로 반환
    
    const navigate = useNavigate();

    return (
        <>
            <h1 onClick={() => {navigate('/')}}>BTS</h1>
            <Bt bt={data} /> 
        </>
    ) 
}

export default BtContainers;