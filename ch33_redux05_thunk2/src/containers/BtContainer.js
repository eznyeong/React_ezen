import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBt } from '../modules/bts'; //thunk함수 호출
import Bt from '../components/Bt';
import { useNavigate } from 'react-router-dom';

//방탄소년단 데이터 한개한개를 받아오는 컨테이너 컴포넌트
function BtContainer({ btId }) {
    const { data, loading, error } = useSelector(
        state => state.bts.bt[btId]
    ) || {
        loading: false,
        data: null,
        error: null
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //데이터를 가져오는 디스패치 처리 => 초기 데이터는 한번만 호출
    useEffect(() => {
        // 재로딩 방지
        if(data) return;
        dispatch(getBt(btId));
    },[btId, data, dispatch]); 

    //API를 데이터를 가져와서 로딩중, 성공, 실패일 수도 있어서 각각 컴포넌트를 반환
    if(loading) return <div>로딩중...</div>; //여긴 원래 로딩중 컴포넌트를 반환
    if(error) return <div>에러 발생!!!</div>; //여긴 원래 에러페이지 컴포넌트반환
    if(!data) return null; //데이터는 잘왔는데 서버 문제가 있는 경우 - 페이지를 컴포넌트로 반환
    return (
        <>
            <h1
                style={{cursor: 'pointer'}}
                onClick={()=>{navigate('/')}}
        >BTS</h1>
            <Bt bt={data} />
        </>
    ); 
}

export default BtContainer;