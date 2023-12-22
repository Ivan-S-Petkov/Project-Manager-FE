import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Card({ header, value, link }) {
  return (
    <Wrapper to={`${link || ""}`}>
      <h4>{header}</h4>
      <Info>
        <h2>{value}</h2>
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  box-sizing: border-box;
  padding: 5px;
  border-radius: 5px;
  background-color: #354f52;
  color: white;
  width: 32%;
  margin: 8px 0px;
  font-size: 16px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 2px solid #354f52;

  &:hover {
    background-color: #52796f;
    border: 2px solid #354f52;
  }

  h2 {
    font-size: 35px;
  }

  h4 {
    padding: 0px 10px;
    font-size: 24px;
    font-weight: 600;
    border-right: 1px solid white;
    height: 65px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export default Card;
