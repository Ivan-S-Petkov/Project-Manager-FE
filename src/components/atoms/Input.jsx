import React, { useState } from "react";
import styled from "styled-components";

function Input({ text, type, initialValue, handleInput }) {
  const [value, setValue] = useState(initialValue || "");

  function handleChange(e) {
    setValue(e.target.value);
    handleInput(e.target.value);
  }

  return (
    <Wrapper>
      <label htmlFor={text.toLowerCase()}>{text}:</label>
      <input
        type={type}
        name={text.toLowerCase()}
        id={text.toLowerCase()}
        value={value}
        onChange={handleChange}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: 10px;
  align-items: center;
  display: flex;
  justify-content: space-between;

  label {
    margin-right: 7px;
  }

  input {
    width: 200px;
    flex-grow: 1;
    background-color: #354f52;
    border: 1px solid gray;
    border-radius: 3px;
    font-size: 15px;
    color: white;
    padding: 4px 14px;
    &:hover {
      background-color: #2a3e41;
      border: 1px solid white;
    }
  }
`;

export default Input;
