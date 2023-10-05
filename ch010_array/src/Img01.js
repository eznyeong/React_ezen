import React from 'react';

import bts01 from './bts/bts01.jpg' // bts01 변수에 경로를 담아줌
import bts02 from './bts/bts02.jpg'
import bts03 from './bts/bts03.jpg'

// 1. src폴더 내부에 이미지를 넣는 경우
function Img01() {
    return (
        <div>
            <li><img src={bts01} alt="방탄소년단" /></li>
            <li><img src={bts02} alt="방탄소년단" /></li>
            <li><img src={bts03} alt="방탄소년단" /></li>
        </div>
    );
}

export default Img01;