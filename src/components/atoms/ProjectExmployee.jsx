import React from "react";
import styled from "styled-components";

function ProjectEmployee({ employee }) {
  const { name, department, duration } = employee;
  return (
    <Wrapper>
      <div>
        <Title>{name}</Title>
        <Description>{department}</Description>
      </div>
      <Hours>{duration}</Hours>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  div {
    padding-left: 10px;
  }
`;

const Title = styled.p`
  font-size: 20px;
  margin: 0px;
`;

const Description = styled.p`
  margin: 0px;
  font-size: 16px;
`;

const Hours = styled.p`
  margin: 0px;
  margin-right: 40px;
  font-size: 25px;
  font-weight: 600;
`;

export default ProjectEmployee;
