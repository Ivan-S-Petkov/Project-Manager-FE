import React, { useState } from "react";
import styled from "styled-components";

function Filter({ departments, handleFilter }) {
  const options = ["", ...departments];
  const [selected, setSelected] = useState(options[0]);

  const handleChange = (e) => {
    setSelected(e.target.value);
    handleFilter(e.target.value);
  };

  return (
    <Wrapper>
      Filter:
      <select value={selected} onChange={handleChange}>
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
  margin-right: 30px;

  select {
    margin: 5px;
    width: 130px;
  }
`;
export default Filter;
