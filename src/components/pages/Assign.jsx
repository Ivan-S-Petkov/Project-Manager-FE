import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import { useAssign } from "../../hooks/useAssign";

function Assign() {
  const { jsonData, errors, handleFileUpload, handleValidate, handleUpload } =
    useAssign();

  return (
    <Wrapper>
      <div>
        <h2>1. Mass Data Upload via CSV File</h2>
        <Section>
          <Data>
            <label htmlFor="file">Select file to upload</label>
            <input type="file" text="" onChange={(e) => handleFileUpload(e)} />
            <Button text="Validate" onClick={handleValidate} />
          </Data>
        </Section>
      </div>
      {jsonData ? (
        <>
          <DataValidationContent>
            <h2>Errors</h2>
            {errors !== null
              ? errors.map((error, index) => {
                  return <p key={index}>{error}</p>;
                })
              : "No errors."}
            <h2>Valid Records</h2>
            <div>
              {jsonData.map((line, index) => {
                return <p key={index}>{JSON.stringify(line, null, 2)}</p>;
              })}
            </div>
          </DataValidationContent>
          <div>
            <h2>2. Upload Valid Records</h2>
            <Section>
              <Data>
                <Button text="Upload" onClick={handleUpload} />
              </Data>
            </Section>
          </div>
        </>
      ) : (
        // Display a message when no file is selected
        <p>Please select a CSV file.</p>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Work Sans";
  color: #2f3e46;
`;

const Section = styled.div`
  box-sizing: border-box;
  padding: 15px;
  border-radius: 5px;
  background-color: #354f52;
  color: white;
  margin: 8px 1%;
  font-size: 16px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 2px solid #354f52;
  position: relative;
`;
const Data = styled.div`
  margin-left: 10px;
  align-items: center;
  display: flex;
  justify-content: space-between;

  label {
    margin-right: 7px;
  }

  input {
    margin-right: 20px;
    flex-grow: 1;
    background-color: #354f52;
    border: 1px solid gray;
    border-radius: 3px;
    font-size: 15px;
    color: white;
    padding: 4px 14px;
    &:hover {
      background-color: #2a3e41;
      border: 1px solid white;
    }
  }
`;

const DataValidationContent = styled.div`
  margin-left: 50px;
`;

export default Assign;
