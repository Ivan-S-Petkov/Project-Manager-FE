import React from "react";
import styled from "styled-components";
import SubmitButton from "../atoms/SubmitButton";
import Input from "../atoms/Input";
import SelectInput from "../atoms/SelectInput";
import { useTaskAdd } from "../../hooks/useTaskAdd";
import { AddEditContent } from "../../styled/common";

function TaskAdd({ tasks, setTasks, toggleAdd }) {
  const {
    projects,
    employees,
    handleAddForm,
    handleProjectId,
    handleEmployeeId,
    handleStartDate,
    handleEndDate,
  } = useTaskAdd(tasks, setTasks, toggleAdd);

  return (
    <AddEditContent>
      <Close onClick={toggleAdd}>x</Close>
      {employees && projects ? (
        <form onSubmit={handleAddForm}>
          <SelectInput
            text="Project"
            optionsArr={projects}
            handleInput={handleProjectId}
          />
          <SelectInput
            text="Employee"
            optionsArr={employees}
            handleInput={handleEmployeeId}
          />
          <Input text="Start Date" type="date" handleInput={handleStartDate} />
          <Input text="End Date" type="date" handleInput={handleEndDate} />
          <SubmitButton text="Add"></SubmitButton>
        </form>
      ) : (
        <></>
      )}
    </AddEditContent>
  );
}

const Close = styled.div`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 2px;
  font-size: 20px;
`;

export default TaskAdd;
