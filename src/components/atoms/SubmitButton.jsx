import React from "react";
import styled from "styled-components";

function SubmitButton({ text }) {
  return <Wrapper type="submit">{text}</Wrapper>;
}

const Wrapper = styled.button`
  font-size: 16px;
  cursor: pointer;
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

export default SubmitButton;
