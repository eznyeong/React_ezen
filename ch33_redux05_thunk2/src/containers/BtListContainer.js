import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBts } from '../modules/bts'; //thunk함수 호출
import BtList from '../components/BtList'; //프레젠테이셔널 컴포넌트 호출

//데이터 전체를 불러올 컨테이너 컴포넌트
function BtListContainer() {
    //스토어 데이터 조회 - 로딩중, 성공, 실패로 조회
    //비구조화할당을 통해 각각 변수에 처리
    //state : 모든 값 처리
    //첫번째 bts : 리듀서를 선택
    //두번째 bts : bts와 bt데이터로 나뉠 때의 bts
    const { data, loading, error } = useSelector(state => state.bts.bts);
    const dispatch = useDispatch();

    //데이터를 가져오는 디스패치 처리 => 초기 데이터는 한번만 호출
    useEffect(() => {
        // 재로딩이 뜨지 않게 처리
        // 아래 방법을 쓰면 다시는 재로딩이 되지 않음
        // if(data) return; // 리턴 뒤에 코드가 없으면 아래 코드가 실행 X

        // 재로딩이 되지만, 화면에서 표시하지 않기
        
        dispatch(getBts());
    },[data, dispatch]); 
    //의존성배열이 빈배열이면 초기실행한번만 처리
    //API를 데이터를 가져와서 기다리는 시간이 발생될 수도 있어서 dispatch담기

    //API를 데이터를 가져와서 로딩중, 성공, 실패일 수도 있어서 각각 컴포넌트를 반환
    if(loading && !data) return <div>로딩중...</div>; //여긴 원래 로딩중 컴포넌트를 반환
    if(error) return <div>에러 발생!!!</div>; //여긴 원래 에러페이지 컴포넌트반환
    if(!data) return null; //데이터는 잘왔는데 서버 문제가 있는 경우 - 페이지를 컴포넌트로 반환
    return <BtList bts={data} />; //성공했을 때만 보여주는 컴포넌트
}

export default BtListContainer;