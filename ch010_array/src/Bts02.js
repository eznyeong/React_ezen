import React from 'react';
import Bt02 from './Bt02';

// 방탄소년단 전부 표시하는 부모 컴포넌트
function Bts02() {
    // 배열데이터, 값이 객체형식 → 보통 json데이터를 JS로 불러온 형태
    const bts = [
        {
          id: 'st001', // 배열데이터의 독자적인 키가 될 속성, 숫자로만으로도 사용
          name: '김남준',
          age: 28,
          email: 'rm@gmail.com'
        },
        {
          id: 'st002',
          name: '김석진',
          age: 30,
          email: 'jin@gmail.com'
        },
        {
          id: 'st003',
          name: '민윤기',
          age: 29,
          email: 'suga@gmail.com'
        },
        {
          id: 'st004',
          name: '정호석',
          age: 28,
          email: 'j-hope@gmail.com'
        },
        {
          id: 'st005',
          name: '박지민',
          age: 25,
          email: 'jm@gmail.com'
        },
        {
          id: 'st006',
          name: '김태형',
          age: 25,
          email: 'v@gmail.com'
        },
        {
          id: 'st007',
          name: '진정국',
          age: 23,
          email: 'jg@gmail.com'
        },
    ];

    return (
        <div>
            <h2>방탄소년단 목록</h2>
            <div>
                {/* 배열명.속성명 */}
                
                {/* 1. 데이터를 각각 호출 */}
                {bts.map(bt => <Bt02 key={bt.id} name={bt.name} age={bt.age} email={bt.email} />)}

                {/* 2. 데이터를 한번에 호출 */}
                {bts.map(bt => <Bt02 key={bt.id} bt={bt} />)}
            </div>
        </div>
    );
}

export default Bts02;