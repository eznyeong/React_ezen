import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; //데이터 관리 Hooks 호출
import { getTvingBests } from '../modules/tvingbest'; //전체 데이터 관련 액션생성함수 호출
import LoadingList from '../components/common/LoadingList';
import TvingBestList from '../components/main/TvingBestList';
import Error from '../components/common/Error';

//티빙TOP20 - 전체 리스트 데이터 가져오는 컨테이너 컴포넌트
function TvingBestListContainer() {
    //스토어에서 데이터 조회
    const {data, loading, error} = useSelector(state => state.tvingbests.tvingbests);
    const dispatch = useDispatch();

    //컴포넌트에 마운트한 후에 메인이미지 데이터 요청
    useEffect(() => {
        dispatch(getTvingBests());
    },[dispatch]);

    //로딩중
    if(loading && !data) return <LoadingList />
    //에러발생
    if(error || !data) return <Error />;
    //로딩성공
    return <TvingBestList tvingbests={data} />;
}

export default TvingBestListContainer;