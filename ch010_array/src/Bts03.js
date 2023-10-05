import React from 'react';
import Bt03 from './Bt03';

function Bts03() {
    const bts = [
        {
          id: 'st001',
          name: '김남준',
          age: 28,
          email: 'rm@gmail.com',
          url: './img/bts/bts01.jpg'
        },
        {
          id: 'st002',
          name: '김석진',
          age: 30,
          email: 'jin@gmail.com',
          url: './img/bts/bts02.jpg'
        },
        {
          id: 'st003',
          name: '민윤기',
          age: 29,
          email: 'suga@gmail.com',
          url: './img/bts/bts03.jpg'
        },
        {
          id: 'st004',
          name: '정호석',
          age: 28,
          email: 'j-hope@gmail.com',
          url: './img/bts/bts04.jpg'
        },
        {
          id: 'st005',
          name: '박지민',
          age: 25,
          email: 'jm@gmail.com',
          url: './img/bts/bts05.jpg'
        },
        {
          id: 'st006',
          name: '김태형',
          age: 25,
          email: 'v@gmail.com',
          url: './img/bts/bts06.jpg'
        },
        {
          id: 'st007',
          name: '진정국',
          age: 23,
          email: 'jg@gmail.com',
          url: './img/bts/bts07.jpg'
        },
    ];
    return (
        <div>
            <h3>방탄소년단 목록</h3>  
            {bts.map(bt => <Bt03 key={bt.id} bt={bt} />)}
        </div>
    );
}

export default Bts03;