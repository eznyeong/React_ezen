import React from 'react';
import { Link } from 'react-router-dom';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'; // 파라미터 정보 호출

// useNavigate : Link컴포넌트를 사용하지 않고 다른 페이지를 이동할 수 있게 해주는 hooks
// history 객체처럼 뒤로 가기, 앞으로 가기 등도 사용 가능

function Map() {
    
    const { storeId } = useParams(); // 이 때 변수명이 App.js의 /map/:변수명 과 같아야 함


    const storeDatas = [


        {
            id: 1,
            name: '강남에비뉴',
            addr: '서울특별시 서초구 서초대로77길 62, 강남역아이파크 B102~B105 (서초동)',
            new: true
        },
        {
            id: 2,
            name: '강남역신분당역사',
            addr: '서울특별시 강남구 강남대로 396 (역삼동)',
            new: false
        },
        {
            id: 3,
            name: '강남우성',
            addr: '서울특별시 강남구 강남대로 328 (역삼동)',
            new: true
        }
    ];

    const [serchParams] = useSearchParams();

    const newParams = serchParams.get('new');

    return (
        <div>
            <h3>오시는길페이지입니다.</h3>
            {/* 네비게이션 처리 */}
            <ul>
                {
                    storeDatas.map(storeData => (
                        <li key={storeData.id}>
                            <Link to={`/map/${storeData.id}?new=${storeData.new}`}>
                                {storeData.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <h4>
                { newParams === true && <span style={{color : 'red'}}>NEW</span> }
                {storeDatas[storeId-1].name}
            </h4>
            <p>{storeDatas[storeId-1].addr}</p>
            <img src="http://placehold.it/300x200" alt='예시이미지' />

            <h2>useNavigate</h2>
            <button onClick={()=>navigator('-1')}>뒤로가기</button>
            <button onClick={()=>navigator('-2')}>뒤로가기</button>
            <button onClick={()=>navigator('/')}>뒤로가기</button>
            <button onClick={()=>navigator('/',{replace:true})}>뒤로가기</button>
        </div>
    );
}

export default Map;