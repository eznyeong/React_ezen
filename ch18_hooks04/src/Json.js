import React from 'react';
import BTS from './test.json'

/* 

    - 원래 JS에서는 메서드를 통해서 json데이터를 js객체로 변경해서 사용

    * 리액트는 바로 배열 데이터로 변경해줘서 사용
    import 변수명 from 'json경로'; // 변수명은 개발자가 작성

    * JSX 불러오기
    { json변수명.배열명[].속성명 }

*/

function Json() {
    return (
        <div>
            {
                BTS.bts.map(bt => bt.name)
            }
        </div>
    );
}

export default Json;