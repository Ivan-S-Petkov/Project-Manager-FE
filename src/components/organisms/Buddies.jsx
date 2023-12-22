import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllStatistics } from "../../api/statistics";
import Loader from "../atoms/Loader";
import ProjectPairs from "../molecules/ProjectPairs";
import { Message } from "../../styled/common";

function Buddies() {
  const [statistics, setStatistics] = useState(null);
  const [longestWorkingBuddies, setLongestWorkingBuddies] = useState(null);
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    getAllStatistics()
      .then((res) => {
        if (res.data.length > 0) {
          setStatistics(res.data);
        } else {
          setStatistics("");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (statistics && statistics.length > 0) {
      getlongestWorkingBuddies(statistics);
    }
  }, [statistics]);

  useEffect(() => {
    if (longestWorkingBuddies) {
      getProjects(longestWorkingBuddies);
    }
  }, [longestWorkingBuddies]);

  function getlongestWorkingBuddies(data) {
    // Find the maximum duration
    let maxDuration = Math.max(...data.map((pair) => pair.duration));

    // Return all records with maximum duration and sort them by project
    let longestWorkingBuddiesArr = data
      .filter((a) => a.duration === maxDuration)
      .sort((a, b) => a.project.id - b.project.id);

    // Set winning tasks
    setLongestWorkingBuddies(longestWorkingBuddiesArr);
  }

  function getProjects(data) {
    // Return all records with maximum duration and sort them by project
    let projectsSet = new Set([
      ...data.map((task) => JSON.stringify(task.project)),
    ]);

    // Set winning tasks
    setProjects(projectsSet);
  }

  if (statistics === null) {
    return <Loader />;
  }

  return (
    <Wrapper>
      {longestWorkingBuddies !== null && projects !== null ? (
        <>
          <Hours>{longestWorkingBuddies[0].duration} Days Together</Hours>
          {[...projects].map((project, index) => {
            return (
              <ProjectPairs
                key={index}
                project={JSON.parse(project)}
                longestWorkingBuddies={longestWorkingBuddies}
              />
            );
          })}
        </>
      ) : (
        <Message>
          <i>Only lone wolves here</i> :)
        </Message>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Hours = styled.div`
  border-radius: 5px;
  text-align: center;
  background-color: #354f52;
  color: white;
  margin: 8px 0px;
  padding: 20px;
  font-size: 27px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export default Buddies;
