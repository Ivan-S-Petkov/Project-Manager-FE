import moment from "moment/moment";
import { validateInputs } from "./validations";

// Function to convert CSV data to JSON format
export function convertCSVToJson(csvData) {
  const lines = csvData.split("\n");
  const result = [];
  let error = [];

  // Loop through each line of CSV data
  for (let i = 0; i < lines.length; i++) {
    let [employee, project, startDate, endDate] = lines[i].split(",");

    // Validate all inputs
    let inputErrors = validateInputs(project, employee, startDate, endDate);

    if (inputErrors.length === 0) {
      startDate = moment(startDate).format("YYYY/MM/DD");
      endDate =
        endDate == null || endDate.length === 0
          ? "null"
          : moment(endDate).format("YYYY/MM/DD");

      let obj = {
        project,
        employee,
        startDate,
        endDate,
      };

      result.push(obj);
    } else {
      error.push(
        `Line ${i + 1} is ignored due to the following errors input! `
      );
      error.push(inputErrors);
    }
  }
  return { result, error };
}
