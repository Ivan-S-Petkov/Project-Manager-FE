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
      <Left>
        <Employee>
          <h5>{task.employee.name}</h5>
          <p>{task.employee.department}</p>
        </Employee>
        <Info>
          <h5>{task.project.name}</h5>
          <p>{task.project.description}</p>
        </Info>
      </Left>
      <Right>
        <Date>{task.startDate}</Date>
        <Date>{task.endDate || "ongoing"}</Date>
        <Button text="Delete" onClick={deleteHandler} />
      </Right>
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
  justify-content: space-between;
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

const Left = styled.div`
  width: 65%;
  display: flex;
  gap: 10px;
`;

const Right = styled.div`
  width: 35%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-grow: 1;

  h5 {
    font-size: 20px;
    font-weight: 600;
    margin: 8px;
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
  max-width: 140px;
  width: 30%;

  h5 {
    text-align: left;
  }

  p {
    text-align: left;
  }
`;

const Date = styled.p`
  margin: 0px;
  font-size: 16px;
  font-size: 20px;
  text-align: center;
`;

export default TaskCard;
