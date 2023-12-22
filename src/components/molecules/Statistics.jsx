import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllEmployees } from "../../api/employees";
import { getAllProjects } from "../../api/projects";
import Card from "../atoms/Card";
import Loader from "../atoms/Loader";

function Statistics() {
  const [employees, setEmployees] = useState(null);
  const [projects, setProjects] = useState(null);
  const [departments, setDepartments] = useState(null);

  useEffect(() => {
    getAllEmployees()
      .then((res) => {
        setEmployees(res.data.length);
        if (res.data.length === 0) {
          setDepartments(0);
        } else {
          setDepartments(
            new Set([...res.data.map((employee) => employee.department)]).size
          );
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getAllProjects()
      .then((res) => setProjects(res.data.length))
      .catch((err) => console.log(err));
  }, []);

  if (employees === null || employees === null || employees === null) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <Card header="Employees" value={employees} link="employees"></Card>
      <Card header="Projects" value={projects} link="projects"></Card>
      <Card header="Departments" value={departments}></Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 2%;
  padding-bottom: 10px;
`;

export default Statistics;
