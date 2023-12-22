import React from "react";
import styled from "styled-components";
import Pair from "../atoms/Pair";
import { Info } from "../../styled/common";

function ProjectPairs({ project, longestWorkingBuddies }) {
  return (
    <Wrapper>
      <PairList>
        {longestWorkingBuddies
          .filter((pair) => pair.project.id === project.id)
          .map((pair, index) => {
            return <Pair key={index} pair={pair} />;
          })}
      </PairList>
      <ProjectContent>
        <Info>
          <h5>{project.name}</h5>
          <p>{project.description}</p>
        </Info>
      </ProjectContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 5px;
  border-radius: 5px;
  background-color: #354f52;
  color: white;
  margin: 8px 0px 0px 0px;
  font-size: 16px;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 2px solid #354f52;
`;

const ProjectContent = styled.div`
  margin: 40px;
  width: 50%;
  text-align: center;

  h4 {
    padding: 0px 10px;
    font-size: 24px;
    font-weight: 600;
    height: 65px;
  }
`;

const PairList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2%;
  flex-wrap: wrap;
  width: 25%;
`;

export default ProjectPairs;
