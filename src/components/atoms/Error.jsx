import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ErrorContext } from "../../providers/ErrorProvider";
import Button from "./Button";

function Error() {
  const { error, removeError } = useContext(ErrorContext);

  function closeHandler() {
    removeError();
  }

  useEffect(() => {
    const interval = setInterval(() => closeHandler(), 8000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!error) {
    return <></>;
  }

  return (
    <Wrapper>
      <ErrorContainer>
        {Array.isArray(error) ? (
          error.map((error, index) => <Text key={index}>{error}</Text>)
        ) : (
          <Text>{error}</Text>
        )}
      </ErrorContainer>
      <Button text="X" onClick={closeHandler} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #354f52;
  padding: 10px;
  top: 70px;
  right: 15px;
  border-radius: 4px;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-family: "Work Sans";
  color: #d8adb9;
  font-size: 14px;
  margin: 0px 10px 0px 0px;
`;

export default Error;
