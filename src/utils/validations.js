import moment from "moment";

export function isNotEmpty(string) {
  return string.length;
}

export function isNumber(number) {
  return Number(number);
}

export function isNull(date) {
  return (
    date === null || date.trim().toLowerCase() === "null" || date.length === 0
  );
}

export function isDate(date) {
  return isNumber(Date.parse(date));
}

export function isBeforeTomorrow(date) {
  let _date = Date.parse(date);
  return _date <= new Date();
}

export function firstDateIsBeforeOrEquialSecond(date1, date2) {
  let startDate = moment(date1).format("YYYY/MM/DD");
  let endDate = date2 ? moment(date2).format("YYYY/MM/DD") : moment(new Date());
  return startDate <= endDate;
}

export function validateInputs(projectId, employeeId, startDate, endDate) {
  let errors = [];
  if (!isNumber(projectId)) {
    errors.push("Invalid Project Selected");
  }
  if (!isNumber(employeeId)) {
    errors.push("Invalid Employee Selected");
  }
  if (!isDate(startDate) || !isBeforeTomorrow(startDate)) {
    errors.push("Invalid Start Date");
  }
  if (!(isNull(endDate) || (isDate(endDate) && isBeforeTomorrow(endDate)))) {
    errors.push("Invalid End Date");
  }
  if (!firstDateIsBeforeOrEquialSecond(startDate, endDate)) {
    errors.push("Start Date should be equal or before End Date");
  }
  return errors;
}

export function validateEmployee(name, department) {
  let errors = [];
  if (name === null || name.length < 2 || name.length > 20) {
    errors.push("Name should be between 2 and 20 characters.");
  }
  if (department === null || department.length < 2 || department.length > 20) {
    errors.push("Department should be between 2 and 20 characters.");
  }
  return errors;
}

export function validateProject(name, description) {
  let errors = [];
  if (name === null || name.length < 2 || name.length > 20) {
    errors.push("Name should be between 2 and 20 characters.");
  }
  if (
    description === null ||
    description.length < 10 ||
    description.length > 200
  ) {
    errors.push("Description should be between 10 and 200 characters.");
  }
  return errors;
}
