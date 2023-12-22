import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <Wrapper to={`${project.id}`}>
      <h4>{project.id}</h4>
      <Info>
        <h5>{project.name}</h5>
        <p>{project.description}</p>
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  box-sizing: border-box;
  padding: 5px;
  border-radius: 5px;
  background-color: #354f52;
  color: white;
  width: 24%;
  margin: 8px 0px;
  font-size: 16px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 2px solid #354f52;

  &:hover {
    background-color: #52796f;
    border: 2px solid #354f52;
  }

  h4 {
    padding: 0px 10px;
    font-size: 24px;
    font-weight: 600;
    border-right: 1px solid white;
    height: 65px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  h5 {
    font-size: 20px;
    font-weight: 600;
    margin: 8px;
    text-align: center;
  }
  p {
    margin: 5px;
  }
`;

export default ProjectCard;
