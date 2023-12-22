import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { deleteTask } from "../../api/tasks";

function TaskCard({ task, deleteTaskHandler }) {
  function deleteHandler() {
    deleteTask(task.id)
      .then((res) => {
        deleteTaskHandler(task.id);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Wrapper>
      <Employee>
        <h5>{task.employee.name}</h5>
        <p>{task.employee.department}</p>
      </Employee>
      <Info>
        <h5>{task.project.name}</h5>
        <p>{task.project.description}</p>
      </Info>
      <Date>{task.startDate}</Date>
      <Date>{task.endDate || "ongoing"}</Date>
      <Button text="Delete" onClick={deleteHandler} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 5px;
  border-radius: 5px;
  background-color: #354f52;
  color: white;
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

const Employee = styled(Info)`
  margin-left: 20px;
  border-left: 2px solid white;
  padding-left: 10px;
  align-items: start;
`;

const Date = styled.p`
  margin: 0px;
  font-size: 16px;
  width: 10%;
  font-size: 20px;
  text-align: center;
`;

export default TaskCard;
