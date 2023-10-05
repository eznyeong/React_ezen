// 리덕스의 Ducks패턴의 의해 컴포넌트는 2가지로 분리해서 사용
// 1. container 컴포넌트 : 스토어로부터 데이터를 받을 컴포넌트 : App.js나 페이지 컴포넌트에 연결돼서 화면에 출력
// 2. 프레젠테이셔널 컴포넌트 : UI를 꾸며주는 컴포넌트

// 버킷 데이터를 받을 컨테이너 컴포넌트 생성

import React, { useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'; // 데이터조회, 명령처리 Hooks
import { createBucket, toggleBucket, removeBucket } from '../modules/buckets'; // 리덕스 모듈로부터 액션 생성 함수 호출
import BucketBox from '../components/BucketBox'; // 프레젠테이셔널 컴포넌트 호출


function BucketsContainers() {

    // 1. state 조회 - useSelector
    const buckets = useSelector(state => state.buckets, shallowEqual);

    // 2. action 명령 조회 - useDispatch
    const dispatch = useDispatch(); // action을 발생시킬 함수 처리

    // 3. 각 action들을 dispatch할 이벤트 함수 생성
    const onCreate = text => dispatch(createBucket(text));

    // 체크될 때 다른 값들도 메모리에 호출이 되기 때문에 함수 재사용처리 - useCallback()
    // useCallback()을 받는 컴포넌트는 React.Memo()로 감싸주기
    const onToggle = useCallback(id => dispatch(toggleBucket(id)), [dispatch]);
    const onRemove = useCallback(id => dispatch(removeBucket(id)), [dispatch]);

    return <BucketBox buckets={buckets} onCreate={onCreate} onToggle={onToggle} onRemove={onRemove} />
}

export default BucketsContainers;