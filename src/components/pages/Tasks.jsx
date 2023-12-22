import React, { useEffect, useState } from "react";
import Plus from "../atoms/Plus";
import Input from "../atoms/Input";
import { getAllTasks } from "../../api/tasks";
import TaskList from "../molecules/TaskList";
import TaskAdd from "../molecules/TaskAdd";
import Loader from "../atoms/Loader";
import { Message, Options, Wrapper } from "../../styled/common";

function Tasks() {
  const [tasks, setTasks] = useState(null);
  const [show, setShow] = useState(true);
  const [search, setSearch] = useState();

  useEffect(() => {
    getAllTasks()
      .then((res) => {
        if (res.data.length > 0) {
          setTasks(res.data);
        } else {
          setTasks("");
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

  if (tasks === null) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <h2>Tasks</h2>
      {tasks.length > 0 ? (
        <>
          <Options>
            <Input text="Search" type="text" handleInput={handleSearch} />
          </Options>
          <TaskList tasks={tasks} search={search} setTasks={setTasks} />
        </>
      ) : (
        <Message>No Tasks Yet</Message>
      )}
      {show ? (
        <Plus toggleAdd={toggleAdd} />
      ) : (
        <TaskAdd toggleAdd={toggleAdd} tasks={tasks} setTasks={setTasks} />
      )}
    </Wrapper>
  );
}

export default Tasks;
