import React, { useEffect, useState } from "react";
import { getAllEmployees } from "../../api/employees";
import Plus from "../atoms/Plus";
import Input from "../atoms/Input";
import EmployeeList from "../molecules/EmployeeList";
import EmployeeAdd from "../molecules/EmployeeAdd";
import SelectFilter from "../atoms/SelectFilter";
import Loader from "../atoms/Loader";
import { Message, Options, Wrapper } from "../../styled/common";

function Employees() {
  const [employees, setEmployees] = useState(null);
  const [show, setShow] = useState(true);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState();

  useEffect(() => {
    getAllEmployees()
      .then((res) => {
        if (res.data.length > 0) {
          setEmployees(res.data);
        } else {
          setEmployees("");
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

  function handleFilter(filter) {
    setFilter(filter.toLowerCase());
  }

  if (employees === null) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <h2>Employees</h2>
      {employees.length > 0 ? (
        <>
          <Options>
            <Input text="Search" type="text" handleInput={handleSearch} />
            <SelectFilter
              text="Filter"
              optionsArr={
                employees
                  ? new Set([
                      ...employees.map((employee) => employee.department),
                    ])
                  : ""
              }
              handleInput={handleFilter}
            />
          </Options>
          <EmployeeList employees={employees} search={search} filter={filter} />
        </>
      ) : (
        <Message>No Employees Yet</Message>
      )}
      {show ? (
        <Plus toggleAdd={toggleAdd} />
      ) : (
        <EmployeeAdd
          toggleAdd={toggleAdd}
          employees={employees}
          setEmployees={setEmployees}
        />
      )}
    </Wrapper>
  );
}

export default Employees;
