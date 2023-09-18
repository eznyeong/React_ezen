import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; //데이터관리관련 Hooks 호출
import { getParaTops } from '../modules/paratop'; //전체데이터관련 액션생성함수 호출
import ParaTopList from '../components/paramount/ParaTopList';
import LoadingList from '../components/common/LoadingList';
import Error from '../components/common/Error';


//파라TOP20의 전체 데이터를 스토어로부터 가져올 컨테이너 컴포넌트
function ParaTopListContainer() {
    //데이터 조회
    const { data, loading, error } = useSelector(state => state.paratops.paratops)

    //디스패치 처리
    const dispatch = useDispatch();

    //컴포넌트에 마운트 후에 데이터 처리
    useEffect(() => {
        dispatch(getParaTops());
    }, [dispatch]);

    //로딩중, 성공, 에러 관련 컴포넌트를 각각 호출
    if(loading && !data) return <LoadingList />
    if(error || !data) return <Error />
    return <ParaTopList paratops={data} />
}

export default ParaTopListContainer;