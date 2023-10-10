import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // 데이터관리 Hooks 호출
import { increaseAsync, decreaseAsync } from '../modules/counter' // 액션 thunk생성함수 가져오기
import Counter from '../components/Counter';

// 스토어 데이터를 받아오는 컨테이너 컴포넌트
function CounterContainer() {
    // 데이터조회
    const number = useSelector(state => state.counter);

    // 디스패치처리
    const dispatch = useDispatch();

    // 이벤트 함수 선언
    const onIncrease = () => {
        dispatch(increaseAsync());
    }
    const onDecrease = () => {
        dispatch(decreaseAsync());
    }
    

    return (
        <div>
            <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
        </div>
    );
}

export default CounterContainer;