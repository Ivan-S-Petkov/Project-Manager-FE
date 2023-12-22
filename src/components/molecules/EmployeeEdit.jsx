import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getEmployeeById, updateEmployee } from "../../api/employees";
import { ErrorContext } from "../../providers/ErrorProvider";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { AddEditContent, Wrapper } from "../../styled/common";

function EmployeeEdit() {
  const [employee, setEmployee] = useState(null);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const { addError } = useContext(ErrorContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getEmployeeById(id)
      .then((res) => {
        setEmployee(res.data);
        setName(res.data.name);
        setDepartment(res.data.department);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function handleName(name) {
    setName(name);
  }

  function handleDepartment(department) {
    setDepartment(department);
  }

  function handleSave() {
    if (name && department) {
      updateEmployee(employee.id, name, department)
        .then((res) => {
          navigate(-1);
        })
        .catch((err) => console.log(err));
    } else {
      addError("Please specify both name and department");
    }
  }

  if (!employee) {
    return <>Loading...</>;
  }

  return (
    <Wrapper>
      <h3>Employee Profile</h3>
      <AddEditContent>
        <h4>{employee.id}</h4>
        <Info>
          <Input
            text="Name"
            type="text"
            handleInput={handleName}
            initialValue={employee.name}
          />
          <Input
            text="Department"
            type="text"
            handleInput={handleDepartment}
            initialValue={employee.department}
          />
        </Info>
        <Actions>
          <Button onClick={handleSave} text="Save"></Button>
          <Button to={`/employees/${employee.id}`} text="Discard"></Button>
        </Actions>
      </AddEditContent>
    </Wrapper>
  );
}

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: end;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
`;

export default EmployeeEdit;
