// 리덕스 컴포넌트 관리 - Ducks 패턴
// 1. 컨테이너 컴포넌트 : 스토어로부터 데이터를 가져오는 컴포넌트
//                       프레젠테이셔널 컴포넌트에 값을 내려줌
// 2. 프레젠테이셔널 컴포넌트 : UI를 꾸며주는 컴포넌트

// best데이터를 내려받는 컨포넘트 생성
import React, { useCallback } from 'react';
import BestBox from '../components/BestBox'; // 데이터를 받을 프레젠테이셔널 컴포넌트 호출

import { useSelector, useDispatch } from 'react-redux'; // hooks 호출
import { create, toggle, remove } from '../modules/bests'; // 액션 생성 함수

function BestsContainers() {
    // state
    const bests = useSelector(state => state.best);

    // dispatch 호출
    const dispatch = useDispatch();
    
    // 디스패치를 이벤트 함수로 처리
    const onCreate = (name, price, descript, image) => dispatch(create(name, price, descript, image));

    // useCallback은 함수를 재사용해서 메모리 절감
    // 이벤트함수를 받는 모든 컴포넌트는 React.memo(컴포넌트명) 내보내주기
    const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch])
    const onRemove = useCallback(id => dispatch(remove(id)), [dispatch])

    return <BestBox bests={bests} onCreate={onCreate} onToggle={onToggle} onRemove={onRemove} />

}

export default BestsContainers;

