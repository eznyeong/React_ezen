import React from "react";
import styled from "styled-components";
import { initialBests } from './../BestContext'
import { useParams } from "react-router-dom";

const ProductBlock = styled.div`
  width: 1180px;
  margin: 0px auto;
  padding: 10px 10px 90px;
  box-sizing: border-box;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  img {
    float: left;
    width: 560px;
  }
`;

const DescBlock = styled.div`
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
  const {name, image, price, descript} = bests[id-1]

  
  return (
    <ProductBlock>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <DescBlock>
        <p>{descript}</p>
        <h5>\ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
      </DescBlock>
    </ProductBlock>
  );
}

export default Product;