import React from 'react';
import Bt01 from './Bt01';

// 방탄소년단 전부 표시하는 부모 컴포넌트 → App.js로 import 처리
function Bts01() {
    
    // 배열 데이터 선언
    const bts = ['김남준','김석진','민윤기','정호석','박지민','김태형','진정국'];

    return (
        <div>
            <h1>방탄소년단 목록</h1>
            <ul>
            {/* 
                // 비합리적인 목록
                // map() 메서드를 사용하는 것이 합리적
                // map((x) => { })
                // 여기서 x는 기존 배열 값 한개를 받아오는 매개변수
                <Bt01 name={ bts[0] } />
                <Bt01 name={ bts[1] } />
                <Bt01 name={ bts[2] } />
                <Bt01 name={ bts[3] } />
                <Bt01 name={ bts[4] } />
                <Bt01 name={ bts[5] } />
                <Bt01 name={ bts[6] } />
            */}
            {/* 컴포넌트가 내장하고 있는 key라는 속성이 존재 */}
            {/* 배열데이터를 반복적으로 처리할 때 key 속성 안 쓰면 에러 발생 */}
            { bts.map((bt, i) => <Bt01 name={bt} key={i} num={i} />) }
            </ul>
        </div>
    );
}

export default Bts01;