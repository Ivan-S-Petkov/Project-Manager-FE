import React, { useContext, useState } from "react";
import styled from "styled-components";
import { createEmployee } from "../../api/employees";
import { ErrorContext } from "../../providers/ErrorProvider";
import SubmitButton from "../atoms/SubmitButton";
import Input from "../atoms/Input";
import { AddEditContent } from "../../styled/common";
import { validateEmployee } from "../../utils/validations";

function EmployeeAdd({ employees, setEmployees, toggleAdd }) {
  const [name, setName] = useState(null);
  const [department, setDepartment] = useState(null);
  const { addError } = useContext(ErrorContext);

  function handleName(name) {
    setName(name);
  }

  function handleDepartment(department) {
    setDepartment(department);
  }

  function handleAddForm(e) {
    e.preventDefault();
    let errors = validateEmployee(name, department);
    if (errors.length === 0) {
      createEmployee(name, department)
        .then((res) => {
          setEmployees([...employees, res.data]);
          toggleAdd();
        })
        .catch((err) => console.log(err));
    } else {
      addError(errors);
    }
  }

  return (
    <AddEditContent>
      <Close onClick={toggleAdd}>x</Close>
      <form onSubmit={handleAddForm}>
        <Input text="Name" type="text" handleInput={handleName} />
        <Input text="Department" type="text" handleInput={handleDepartment} />
        <SubmitButton text="Add"></SubmitButton>
      </form>
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

export default EmployeeAdd;
