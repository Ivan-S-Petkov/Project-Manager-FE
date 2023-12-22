import React from "react";
import styled from "styled-components";

function Plus({ toggleAdd }) {
  function handleClick() {
    toggleAdd();
  }
  return <Wrapper onClick={handleClick}>+</Wrapper>;
}

const Wrapper = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 5px;
  background-color: #354f52;
  color: white;
  width: 24%;
  margin: 8px 0px;
  font-size: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #354f52;

  &:hover {
    background-color: #52796f;
    border: 2px solid #354f52;
  }
`;

export default Plus;
