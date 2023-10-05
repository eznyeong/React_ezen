import React from 'react';
// useSelector() : 스토어 데이터를 조회하는 함수
// useSelector(state선택함수, equalityFn)
// equalityFn : 이전 값과 다음 값을 비교해서 true가 나오면 리렌더링하지 않고, false가 나오면 리렌더링 처리
// useDispatch() : 스토어에서 받은 액션타입으로 명령을 전달하는 함수
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/count';
import Counter from '../components/Counter'; //프레젠테이셔널 컴포넌트를 자손 처리

//컨테이너 컴포넌트 : 스토어 조회 및 dispatch관리
function CounterContainer() {
    //스토어 데이터 조회 - useSelector Hooks처리
    // useSelector를 최적화시키기 (메모리 절감)
    // 1. 객체되어 있는 데이터도 각각 호출
    // const number = useSelector(state => state.counter.number);
    // const diff = useSelector(state => state.counter.diff);

    // 2. equalityFn 사용
    const {number, diff} = useSelector(
        state => ({
            number: state.counter.number,
            diff: state.counter.diff
        }),
        shallowEqual // useSelector가 최적화
    )
    
    // const { number, diff } = useSelector(state => ({
    //     //리덕스모듈이 하나면 : state.속성명
    //     //루트리듀서를 사용하면 : state.리듀서명.속성명
    //     number: state.counter.number,
    //     diff: state.counter.diff
    // }));

    //dispatch처리
    const dispatch = useDispatch();

    //각각의 액션을 담는 이벤트함수 생성
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = (diff) => dispatch(setDiff(diff));

    //자손컴포넌트인 프레젠테이셔널 컴포넌트에 state와 dispath명령을 내려줌
    return (
        <Counter
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}

export default CounterContainer;