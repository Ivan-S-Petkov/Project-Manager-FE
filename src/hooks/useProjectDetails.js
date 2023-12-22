import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../api/projects";
import { getTasksByProject } from "../api/tasks";

function useProjectDetails() {
  const [project, setProject] = useState(null);
  const [employees, setEmployees] = useState(null);
  const [tasks, setTasks] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProjectById(id)
      .then((res) => {
        setProject(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    getTasksByProject(id)
      .then((res) => {
        if (res.data.length > 0) {
          console.log(res.data);
          setTasks(res.data);
          setEmployees(getEmployees(res.data));
        } else {
          setEmployees("");
          setTasks("");
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  function getEmployees(tasks) {
    const employees = new Map();
    for (const task of tasks) {
      // Get "duration" value if value already exists, otherwise sets it 0
      let currentDuration = employees?.get(task.employee.id)?.duration
        ? employees.get(task.employee.id).duration
        : 0;
      // Create map or update if already exists
      employees.set(task.employee.id, {
        ...task.employee,
        duration: currentDuration + task.duration,
      });
    }
    return [...employees.values()];
  }

  return {
    project,
    employees,
    tasks,
  };
}

export { useProjectDetails };
