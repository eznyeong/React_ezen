import React from "react";
import BestItem from "./BestItem";
import { useBestState } from "../BestContext";
import styled from "styled-components";
import {Link} from 'react-router-dom'

const BestListBlock = styled.ul`
  width: 100%;
  overflow: hidden;
  margin-bottom: 30px;
`;

//리스트 전체는 map으로 반환할 컴포넌트
function BestList() {
  const bests = useBestState();

  return (
    <BestListBlock>
      {bests.map((best) => (
          <Link key={best.id} to={`/&{best.id}?like=${best.like}`} >
            <BestItem
              key={best.id}
              id={best.id}
              name={best.name}
              price={best.price}
              descript={best.descript}
              image={best.image}
              like={best.like}
            />
          </Link>
      ))}
    </BestListBlock>
  );
}

export default BestList;
