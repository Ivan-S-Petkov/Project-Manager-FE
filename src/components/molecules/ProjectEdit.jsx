import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { ErrorContext } from "../../providers/ErrorProvider";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { getProjectById, updateProject } from "../../api/projects";
import TextArea from "../atoms/TextArea";
import { AddEditContent, Wrapper } from "../../styled/common";

function ProjectEdit() {
  const [project, setProject] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { addError } = useContext(ErrorContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProjectById(id)
      .then((res) => {
        setProject(res.data);
        setName(res.data.name);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function handleName(name) {
    setName(name);
  }

  function handleDescription(description) {
    setDescription(description);
  }

  function handleSave() {
    if (name && description) {
      updateProject(project.id, name, description)
        .then((res) => {
          navigate(-1);
        })
        .catch((err) => console.log(err));
    } else {
      addError("Please specify both name and description");
    }
  }

  if (!project) {
    return <>Loading...</>;
  }

  return (
    <Wrapper>
      <h3>Projet Details</h3>
      <AddEditContent>
        <h4>{project.id}</h4>
        <Info>
          <Input
            text="Name"
            type="text"
            handleInput={handleName}
            initialValue={project.name}
          />
          <TextArea
            text="Department"
            handleInput={handleDescription}
            initialValue={project.description}
          />
        </Info>
        <Actions>
          <Button onClick={handleSave} text="Save"></Button>
          <Button to={`/projects/${project.id}`} text="Discard"></Button>
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

export default ProjectEdit;
