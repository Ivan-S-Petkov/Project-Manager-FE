import React, { useState } from "react";
import styled from "styled-components";

function Search({ handleSearch }) {
  const [criteria, setCriteria] = useState("");

  function handleChange(e) {
    setCriteria(e.target.value);
    handleSearch(e.target.value);
  }
  return (
    <Wrapper>
      Search:
      <input
        type="text"
        name="criteria"
        id="criteria"
        value={criteria}
        onChange={handleChange}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-right: 30px;

  input {
    margin: 5px;
  }
`;

export default Search;
