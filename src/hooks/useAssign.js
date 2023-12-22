import { useContext, useState } from "react";
import { ErrorContext } from "../providers/ErrorProvider";
import { useNavigate } from "react-router-dom";
import { convertCSVToJson } from "../utils/csv";
import { createTasks } from "../api/tasks";

function useAssign() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jsonData, setJsonData] = useState(null);
  const [errors, setErrors] = useState(null);
  const { addError } = useContext(ErrorContext);
  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  function handleValidate(e) {
    if (selectedFile && selectedFile.type.includes("text/csv")) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const csvData = e.target.result;

        // Call the function to conversion CSV to JSON
        const { result, error } = convertCSVToJson(csvData);
        setJsonData(result);
        if (error.length > 0) {
          setErrors(error);
        }
      };

      reader.readAsText(selectedFile);
    } else {
      addError("Incorrect File Type! Please upload CSV file.");
    }
  }

  function handleUpload() {
    if (jsonData) {
      createTasks(jsonData)
        .then(() => navigate("/tasks"))
        .catch((err) => {
          console.log(err);
          if (err.response && err.response.data.length > 0) {
            addError(err.response.data);
          }
        });
    }
  }

  return {
    selectedFile,
    jsonData,
    errors,
    handleFileUpload,
    handleValidate,
    handleUpload,
  };
}

export { useAssign };
