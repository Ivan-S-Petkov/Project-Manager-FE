import { useContext, useEffect, useState } from "react";
import { getAllEmployees } from "../api/employees";
import { getAllProjects } from "../api/projects";
import { ErrorContext } from "../providers/ErrorProvider";
import { validateInputs } from "../utils/validations";
import moment from "moment";
import { createTask } from "../api/tasks";

function useTaskAdd(tasks, setTasks, toggleAdd) {
  const [projects, setProjects] = useState();
  const [employees, setEmployees] = useState();
  const [projectId, setProjectId] = useState(null);
  const [employeeId, setEmployeeId] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { addError } = useContext(ErrorContext);

  useEffect(() => {
    getAllEmployees()
      .then((res) => {
        setEmployees(res.data);
        setEmployeeId(res.data[0].id);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getAllProjects()
      .then((res) => {
        setProjects(res.data);
        setProjectId(res.data[0].id);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleProjectId(id) {
    setProjectId(id);
  }

  function handleEmployeeId(id) {
    setEmployeeId(id);
  }

  function handleStartDate(date) {
    setStartDate(date);
  }

  function handleEndDate(date) {
    setEndDate(date);
  }

  function handleAddForm(e) {
    e.preventDefault();
    let errors = validateInputs(projectId, employeeId, startDate, endDate);
    if (errors.length === 0) {
      // Format string dates to Dates or null
      let _startDate = moment(startDate).format("YYYY/MM/DD");
      let _endDate =
        endDate === null || endDate.length === 0
          ? "null"
          : moment(endDate).format("YYYY/MM/DD");

      let data = {
        project: projectId,
        employee: employeeId,
        startDate: _startDate,
        endDate: _endDate,
      };

      // Create
      createTask(data)
        .then((res) => {
          setTasks([...tasks, res.data]);
          toggleAdd();
        })
        .catch((err) => {
          console.log(err);
          if (err.response && err.response.data) {
            addError(err.response.data);
          }
        });
    } else {
      addError(errors);
    }
  }
  return {
    projects,
    employees,
    handleAddForm,
    handleProjectId,
    handleEmployeeId,
    handleStartDate,
    handleEndDate,
  };
}

export { useTaskAdd };
