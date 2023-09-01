import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/count';
import Counter from '../components/Counter'; //프레젠테이셔널 컴포넌트를 자손 처리

//컨테이너 컴포넌트 : 스토어 조회 및 dispatch관리
function CounterContainer() {
    //스토어 데이터 조회 - useSelector Hooks처리
    const { number, diff } = useSelector(state => ({
        //리덕스모듈이 하나면 : state.속성명
        //루트리듀서를 사용하면 : state.리듀서명.속성명
        number: state.counter.number,
        diff: state.counter.diff
    }));

    //dispatch처리
    const dispatch = useDispatch();

    //각각의 액션을 담는 이벤트함수 생성
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = () => dispatch(setDiff(diff));

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