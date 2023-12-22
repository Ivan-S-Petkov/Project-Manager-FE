import React, { useEffect, useState } from "react";
import Plus from "../atoms/Plus";
import Input from "../atoms/Input";
import { getAllProjects } from "../../api/projects";
import ProjectList from "../molecules/ProjectList";
import ProjectAdd from "../molecules/ProjectAdd";
import Loader from "../atoms/Loader";
import { Message, Options, Wrapper } from "../../styled/common";

function Projects() {
  const [projects, setProjects] = useState(null);
  const [show, setShow] = useState(true);
  const [search, setSearch] = useState();

  useEffect(() => {
    getAllProjects()
      .then((res) => {
        if (res.data.length > 0) {
          setProjects(res.data);
        } else {
          setProjects("");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  function toggleAdd() {
    setShow(!show);
  }

  function handleSearch(searchPhase) {
    setSearch(searchPhase.toLowerCase());
  }

  if (projects === null) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <h2>Projects</h2>
      {projects.length > 0 ? (
        <>
          <Options>
            <Input text="Search" type="text" handleInput={handleSearch} />
          </Options>
          <ProjectList projects={projects} search={search} />
        </>
      ) : (
        <Message>No Projects Yet</Message>
      )}
      {show ? (
        <Plus toggleAdd={toggleAdd} />
      ) : (
        <ProjectAdd
          toggleAdd={toggleAdd}
          projects={projects}
          setProjects={setProjects}
        />
      )}
    </Wrapper>
  );
}

export default Projects;
