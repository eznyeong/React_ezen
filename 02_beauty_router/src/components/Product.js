import React from "react";
import { initialBests } from "../BestContext";
import styled from "styled-components";
import {useParams} from 'react-router-dom'


//스타일컴포넌트생성
const ProductBlock = styled.div`
  width:1180px;
  margin: 0 auto;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  };
  img {
    float: left;
    width: 540px;
  };
`;

const DescBox = styled.div`
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

  const {id} = useParams();
  const bests = initialBests;
  const {name, image, price, descript} = bests[id-1];

  return (
    <ProductBlock>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <DescBox>
        <p>{descript}</p>
        <h5>\ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
      </DescBox>
    </ProductBlock>
  );
}

export default Product;
