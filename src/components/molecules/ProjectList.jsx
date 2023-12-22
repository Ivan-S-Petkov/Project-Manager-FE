import React, { useEffect, useState } from "react";
import ProjectCard from "../atoms/ProjectCard";
import { List, Message } from "../../styled/common";

function ProjectList({ projects, search }) {
  const [foundResults, setFoundResults] = useState(projects);

  useEffect(() => {
    setFoundResults(
      projects
        .sort((a, b) => a.id - b.id)
        .filter((project) => {
          if (
            !search ||
            project.name.toLowerCase().includes(search) ||
            project.description.toLowerCase().includes(search)
          ) {
            return true;
          } else {
            return false;
          }
        })
    );
  }, [projects, search]);

  return (
    <List>
      {foundResults.length > 0 ? (
        foundResults.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })
      ) : (
        <Message>No Results</Message>
      )}
    </List>
  );
}

export default ProjectList;
