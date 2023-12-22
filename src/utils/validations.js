export function isNotEmpty(string) {
  return string.length;
}

export function isNumber(number) {
  return !isNaN(number);
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
  let startDate = Date.parse(date1);
  let endDate = date2 ? Date.parse(date2) : new Date();
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
  if (
    isDate(startDate) &&
    isBeforeTomorrow(startDate) &&
    !firstDateIsBeforeOrEquialSecond(startDate, endDate)
  ) {
    errors.push("Start Date should be equal or before End Date");
  }
  return errors;
}
