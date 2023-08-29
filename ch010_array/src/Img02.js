import React from 'react';

// 2. require함수 사용 → import와 결과는 다르지 않음
function Img02() {
    return (
        <div>
            {/* <img src='./bts/bts01.jpg' alt='이미지' /> */} // 직접 경로 가져오면 처리 안됨
            <ul>
                <li>
                    <img src={require('./bts/bts01.jpg')} alt='방탄소년단' />
                </li>
                <li>
                    <img src={require('./bts/bts02.jpg')} alt='방탄소년단' />
                </li>
                <li>
                    <img src={require('./bts/bts03.jpg')} alt='방탄소년단' />
                </li>
            </ul>
        </div>
    );
}

export default Img02;