import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TaskCard from "../atoms/TaskCard";
import { List, Message } from "../../styled/common";

function TaskList({ tasks, search, setTasks }) {
  const [foundResults, setFoundResults] = useState(tasks);
  // Removes deleted task from the task list
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  useEffect(() => {
    setFoundResults(
      tasks.filter((tasks) => {
        if (
          !search ||
          tasks.project.name.toLowerCase().includes(search) ||
          tasks.employee.name.toLowerCase().includes(search)
        ) {
          return true;
        } else {
          return false;
        }
      })
    );
  }, [tasks, search]);

  return (
    <TaskContent>
      {tasks.length === 0 ? (
        <Message>No tasks</Message>
      ) : (
        <>
          {foundResults.length > 0 ? (
            foundResults
              .sort((a, b) => a.id - b.id)
              .map((task) => {
                return (
                  <TaskCard
                    key={task.id}
                    task={task}
                    deleteTaskHandler={deleteTask}
                  />
                );
              })
          ) : (
            <Message>No Results</Message>
          )}
        </>
      )}
    </TaskContent>
  );
}

const TaskContent = styled(List)`
  flex-direction: column;
`;

export default TaskList;
