import React from "react";
import styled from "styled-components";
import { Message } from "../../styled/common";

function NotFound() {
  return (
    <Wrapper>
      <Message>Hello Explorer!</Message>
      <Message>
        The requested page is not available! Try looking somewhere else!
      </Message>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex-grow: 1;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Work Sans";
  color: #2f3e46;
  font-size: 20px;
`;

export default NotFound;
