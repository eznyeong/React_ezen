import React, { useEffect } from 'react';
import { btsData } from './btsData';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';

// 주소/1 => 1만 호출
// useParams는 주소에서 파라미터만 반환
// useLocation은 주소관련 정보를 객체로 반환
// useSearchParams은 주소객체에서 search파라미터 반환 - 쿼리스트링의 문자열 반환
// 쿼리스트링이 여러 개 일 수 있어서 배열로 각각의 값을 담아서 반환

// 방탄소년단 한명한명을 표시할 각각 컴포넌트
function BtPage() {

    const bts = btsData;
    const { id } = useParams();

    // 객체 데이터 비구조화할당
    const { name, birth, img } = bts[ id - 1 ];

    // useLocation 함수를 담는 변수 선언
    const location = useLocation();

    useEffect(() => {
        console.log(location);
    },[location])

    // 쿼리스트링을 담는 변수 - 배열의 비구조화할당처리
    const [searchParams] = useSearchParams();
    
    const newParams = searchParams.get('army');

    return (
        <div>
            <img src={img} alt="멤버이미지" />
            <h3>이름: {name} {newParams === 'true' && '| 입대중'}</h3>
            <h3>출생: {birth}</h3>
        </div>
    );
}

export default BtPage;