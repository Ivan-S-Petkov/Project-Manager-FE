import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ErrorContext } from "../../providers/ErrorProvider";
import SubmitButton from "../atoms/SubmitButton";
import Input from "../atoms/Input";
import { createProject } from "../../api/projects";
import TextArea from "../atoms/TextArea";
import { AddEditContent } from "../../styled/common";

function ProjectAdd({ projects, setProjects, toggleAdd }) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const { addError } = useContext(ErrorContext);

  function handleName(name) {
    setName(name);
  }

  function handleDescription(description) {
    setDescription(description);
  }

  function handleAddForm(e) {
    e.preventDefault();
    if (name && description) {
      createProject(name, description)
        .then((res) => {
          setProjects([...projects, res.data]);
          toggleAdd();
        })
        .catch((err) => console.log(err));
    } else {
      addError("Please specify both name and description!");
    }
  }

  return (
    <AddEditContent>
      <Close onClick={toggleAdd}>x</Close>
      <form onSubmit={handleAddForm}>
        <Input text="Name" type="text" handleInput={handleName} />
        <TextArea text="Description" handleInput={handleDescription} />
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

export default ProjectAdd;
