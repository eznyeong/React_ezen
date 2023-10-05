import React from 'react';
import Ive from './Ive';

// 아이브 전체 데이터를 표시하는 부모 컴포넌트
function Ives() {
// 아이브 배열 데이터
    const ives = [
        {
            id: 1,
            name: '안유진',
            birth: '2003. 9. 1.',
            url: './img/ives/ive01.jpg'
        },
        {
            id: 2,
            name: '가을',
            birth: '2002. 9. 24.',
            url: './img/ives/ive02.jpg'
        },
        {
            id: 3,
            name: '레이',
            birth: '2004. 2. 3.',
            url: './img/ives/ive03.jpg'
        },
        {
            id: 4,
            name: '장원영',
            birth: '2004. 8. 31.',
            url: './img/ives/ive04.jpg'
        },
        {
            id: 5,
            name: '리즈',
            birth: '2004. 11. 21.',
            url: './img/ives/ive05.jpg'
        },
        {
            id: 6,
            name: '이서',
            birth: '2007. 2. 21.',
            url: './img/ives/ive06.jpg'
        },
    ]; 

    return (
        <div>
            {
                ives.map(ive => <Ive ive={ive} key={ive.id} /> )
            }
        </div>
    );
}

export default Ives;