import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeById } from "../api/employees";
import { getTasksByEmployee } from "../api/tasks";

function useEmployeeDetails() {
  const [employee, setEmployee] = useState(null);
  const [tasks, setTasks] = useState(null);
  const [projects, setProjects] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getEmployeeById(id)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    getTasksByEmployee(id)
      .then((res) => {
        if (res.data.length > 0) {
          setTasks(res.data);
          setProjects(getProjects(res.data));
        } else {
          setProjects("");
          setTasks("");
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  function getProjects(tasks) {
    const projects = new Map();
    for (const task of tasks) {
      // Get "duration" value if value already exists, otherwise sets it 0
      let currentDuration = projects?.get(task.project.id)?.duration
        ? projects.get(task.project.id).duration
        : 0;
      // Create map or update if already exists
      projects.set(task.project.id, {
        ...task.project,
        duration: currentDuration + task.duration,
      });
    }
    return [...projects.values()];
  }

  return {
    employee,
    tasks,
    projects,
  };
}

export { useEmployeeDetails };
