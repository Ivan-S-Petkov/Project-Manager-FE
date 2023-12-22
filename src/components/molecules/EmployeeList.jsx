import React, { useEffect, useState } from "react";
import EmployeeCard from "../atoms/EmployeeCard";
import { List, Message } from "../../styled/common";

function EmployeeList({ employees, search, filter }) {
  const [foundResults, setFoundResults] = useState(employees);

  useEffect(() => {
    setFoundResults(
      employees
        .sort((a, b) => a.id - b.id)
        .filter((employee) => {
          if (!filter || employee.department.toLowerCase().includes(filter)) {
            return true;
          } else {
            return false;
          }
        })
        .filter((employee) => {
          if (
            !search ||
            employee.name.toLowerCase().includes(search) ||
            employee.department.toLowerCase().includes(search)
          ) {
            return true;
          } else {
            return false;
          }
        })
    );
  }, [employees, search, filter]);

  return (
    <List>
      {foundResults.length > 0 ? (
        foundResults.map((employee) => {
          return <EmployeeCard key={employee.id} employee={employee} />;
        })
      ) : (
        <Message>No Results</Message>
      )}
    </List>
  );
}

export default EmployeeList;
