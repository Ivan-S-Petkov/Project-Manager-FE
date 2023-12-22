import React, { useState } from "react";
import styled from "styled-components";

function SelectFilter({ text, optionsArr, handleInput }) {
  const options = ["", ...optionsArr];
  const [selected, setSelected] = useState(options[0]);

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
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
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
    width: 150px;

    &:hover {
      background-color: #2a3e41;
      border: 1px solid white;
    }
  }
`;

export default SelectFilter;
