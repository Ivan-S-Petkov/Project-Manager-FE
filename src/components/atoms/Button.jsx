import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Button({ text, onClick, to, type }) {
  return (
    <Wrapper type={type} onClick={onClick} to={to}>
      {text}
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  font-family: "Work Sans";
  background-color: #84a98c;
  border-radius: 3px;
  padding: 5px 7px;
  margin: 1px;
  color: black;
  text-decoration: none;
  border: 1px solid #354f52;
  text-align: center;

  &:hover {
    background-color: #52796f;
    border: 1px solid #354f52;
    color: white;
  }
`;
export default Button;
