import React, { useEffect, useMemo, useState } from 'react';

// useMemo의 의존성 배열에 state값을 처리하는 예제
function MemoTest03() {
    // state 선언 - 한국 or 일본 선택하는 state
    const [isCountry, setIsCountry] = useState(true);

    // 결과를 담는 객체 선언
    const location = useMemo(() => {
        return {
            country : isCountry ? '한국' : '일본',
            result : isCountry ? '정말요? 환영합니다!' : '아... 그렇군요',
        }
    }, [isCountry]);


    // useEffect를 통해 콘솔창에 확인
    useEffect(() => {
        console.log('연산 실행 중')
    }, [location])

    // 이벤트 함수 처리
    const onTrueClick = () => {
        setIsCountry(true);
        
    }
    const onFalseClick = () => {
        setIsCountry(false);

    }

    return (
        <div>
            <h2>어느 나라에 가실건가요?</h2>
            <p>나라: {location.country}</p>
            <p style={isCountry ? { color: 'green' } : {color: 'red'}}>선택결과: { location.result}</p>
            <hr />
            <button onClick={onTrueClick}>한국</button>
            &nbsp;&nbsp;
            <button onClick={onFalseClick}>일본</button>
        </div>
    );
}

export default MemoTest03;