import React from "react";
import Button from "../atoms/Button";
import EmployeeProject from "../atoms/EmployeeProject";
import EmployeeTask from "../atoms/EmployeeTasks";
import Loader from "../atoms/Loader";
import {
  AdditionalDetails,
  DetailsList,
  Header,
  Info,
  MainDetails,
  Wrapper,
} from "../../styled/common";
import { useEmployeeDetails } from "../../hooks/useEmployeeDetails";

function EmployeeDetails() {
  const { employee, projects, tasks } = useEmployeeDetails();

  if (employee === null) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <h3>Employee Profile</h3>
      <MainDetails>
        <h4>{employee.id}</h4>
        <Info>
          <h5>{employee.name}</h5>
          <p>{employee.department}</p>
        </Info>
        <Button to="edit" text="Edit"></Button>
      </MainDetails>
      <AdditionalDetails>
        <h4>Projects</h4>
        <DetailsList>
          {projects != null ? (
            <>
              <Header>
                <p>Name</p>
                <p>Days</p>
              </Header>
              {projects.length > 0 ? (
                projects.map((project) => {
                  return <EmployeeProject key={project.id} project={project} />;
                })
              ) : (
                <>No Projects</>
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
                  return <EmployeeTask key={task.id} task={task} />;
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

export default EmployeeDetails;
