import React from "react";
import styled from "styled-components";
import { Info } from "../../styled/common";

function Pair({ pair }) {
  return (
    <Wrapper>
      <Info>
        <h5>{pair.employeeOne.name}</h5>
        {/* <p>{pair.employeeOne.department}</p> */}
      </Info>
      <Info>
        <h5>{pair.employeeTwo.name}</h5>
        {/* <p>{pair.employeeTwo.department}</p> */}
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 10px 0px;
  font-size: 16px;
  display: flex;
  gap: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  margin: 5px 20px;
  border-right: 1px solid white;
  padding: 2px;

  h5 {
    text-align: right;
  }
`;

export default Pair;
