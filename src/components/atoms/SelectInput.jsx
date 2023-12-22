import React, { useState } from "react";
import styled from "styled-components";

function SelectInput({ text, optionsArr, handleInput }) {
  const [selected, setSelected] = useState(optionsArr[0].id);
  const handleChange = (e) => {
    setSelected(e.target.value);
    handleInput(e.target.value);
  };

  return (
    <Wrapper>
      <label htmlFor={text.toLowerCase()}>{text}: </label>
      <select
        name={text.toLowerCase()}
        id={text.toLowerCase()}
        value={selected}
        onChange={handleChange}
      >
        {optionsArr.map((option) => (
          <option key={option.id} value={option.id}>
            {`${option.name} - ${
              option.description || option.department || " "
            }`}
          </option>
        ))}
      </select>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;

  label {
    margin-right: 7px;
  }

  select {
    background-color: #354f52;
    border: 1px solid gray;
    border-radius: 3px;
    font-size: 15px;
    color: white;
    padding: 4px 14px;
    width: 70%;

    &:hover {
      background-color: #2a3e41;
      border: 1px solid white;
    }
  }
`;

export default SelectInput;
