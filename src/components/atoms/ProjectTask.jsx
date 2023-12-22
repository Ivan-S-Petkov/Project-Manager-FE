import React from "react";
import styled from "styled-components";

function ProjectTask({ task }) {
  const { employee, duration, startDate, endDate } = task;

  if (!task) {
    return "Loading...";
  }

  return (
    <Wrapper>
      <div>
        <Title>{employee.name}</Title>
      </div>
      <Date>{startDate}</Date>
      <Date>{endDate ? endDate : "ongoing"}</Date>
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
    width: 40%;
  }
`;

const Title = styled.p`
  font-size: 20px;
  margin: 0px;
`;

const Date = styled.p`
  margin: 0px;
  font-size: 16px;
  width: 30%;
  font-size: 20px;
  text-align: center;
`;

const Hours = styled.p`
  width: 30%;
  margin: 0px;
  margin-right: 40px;
  font-size: 25px;
  font-weight: 600;
  text-align: end;
`;

export default ProjectTask;
