import React from "react";
import Button from "../atoms/Button";
import ProjectEmployee from "../atoms/ProjectExmployee";
import ProjectTask from "../atoms/ProjectTask";
import {
  AdditionalDetails,
  DetailsList,
  Header,
  Info,
  MainDetails,
  Wrapper,
} from "../../styled/common";
import Loader from "../atoms/Loader";
import { useProjectDetails } from "../../hooks/useProjectDetails";

function ProjectDetails() {
  const { project, employees, tasks } = useProjectDetails();

  if (!project) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <h3>Project Details</h3>
      <MainDetails>
        <h4>{project.id}</h4>
        <Info>
          <h5>{project.name}</h5>
          <p>{project.description}</p>
        </Info>
        <Button to="edit" text="Edit"></Button>
      </MainDetails>
      <AdditionalDetails>
        <h4>Employees</h4>
        <DetailsList>
          {employees != null ? (
            <>
              <Header>
                <p>Name</p>
                <p>Days</p>
              </Header>
              {employees.length > 0 ? (
                employees.map((employee) => {
                  return (
                    <ProjectEmployee key={employee.id} employee={employee} />
                  );
                })
              ) : (
                <>No Employees</>
              )}
            </>
          ) : (
            <Loader />
          )}
        </DetailsList>
      </AdditionalDetails>
      <AdditionalDetails>
        <h4>Tasks</h4>
        <DetailsList>
          {tasks != null ? (
            <>
              <Header>
                <p>Name</p>
                <p>Days</p>
              </Header>
              {tasks.length > 0 ? (
                tasks.map((task) => {
                  return <ProjectTask key={task.id} task={task} />;
                })
              ) : (
                <>No Tasks</>
              )}
            </>
          ) : (
            <Loader />
          )}
        </DetailsList>
      </AdditionalDetails>
    </Wrapper>
  );
}

export default ProjectDetails;
