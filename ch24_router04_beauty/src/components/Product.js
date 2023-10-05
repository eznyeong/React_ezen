import React from 'react';
import styled from 'styled-components';
import { useBestState } from '../BestContext'; //전역으로 데이터를 담고 있는 hooks호출
import { useParams } from 'react-router-dom'; //파라미터 정보를 이용할 hooks
import { useSearchParams } from 'react-router-dom'; // 쿼리스트링 정보 가져오기

//스타일컴포넌트 생성
const ProductBlock = styled.div`
    width: 1180px;
    margin: 0 auto;
    padding: 10px 10px 90px;
    box-sizing: border-box;
    &::after {
        content: "";
        clear: both;
    }
    h2 {
        font-size: 24px;
        margin-bottom: 20px;
    }
    img {
        float: left;
    }
`;

const TextBlock = styled.div`
    float: right;
    width: 600px;
    padding: 40px;
    box-sizing: border-box;

    p {
        text-align: justify;
        margin-bottom: 20px;
    }
`;

function Product() {
    const bests = useBestState();

    const { bestId } = useParams(); //변수명이 App.js의 /:변수명

    //각각 페이지 번호를 받아서 그에 맞는 인덱스번호에 해당하는 객체데이터만 반환
    const { name, price, descript, image, like } = bests[bestId - 1];

    // 쿼리스트링 처리
    const [serchParams] = useSearchParams();

    const newParams = serchParams.get('like');

    return (
        <ProductBlock>
            <h2>{name}{newParams === 'true' && '♥'}</h2>
            <img src={image} alt={name} width="560" />
            <TextBlock>
                <p>{descript}</p>
                <span>\ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            </TextBlock>
        </ProductBlock>
    );
}

export default Product;