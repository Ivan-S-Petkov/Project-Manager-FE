import styled from "styled-components";

export const Message = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  width: 100%;
`;

export const Wrapper = styled.div`
  font-family: "Work Sans";
  color: #2f3e46;

  h2 {
    padding-left: 20px;
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: end;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  gap: 1.333%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h5 {
    font-size: 20px;
    font-weight: 600;
    margin: 8px;
    text-align: left;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    margin: 5px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 40px;
  font-size: 24px;
  font-weight: 600;

  p {
    margin: 0px;
  }
`;

export const DetailsList = styled.div`
  padding-left: 30px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
`;

export const MainDetails = styled.div`
  box-sizing: border-box;
  padding: 5px;
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

  h4 {
    padding: 0px 10px;
    font-size: 24px;
    font-weight: 600;
    border-right: 1px solid white;
    height: 65px;
  }
`;

export const AdditionalDetails = styled(MainDetails)`
  justify-content: start;
  align-items: start;
`;

export const AddEditContent = styled.div`
  box-sizing: border-box;
  padding: 28px;
  border-radius: 5px;
  background-color: #354f52;
  color: white;
  margin: 8px auto;
  width: 50%;
  font-size: 16px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 2px solid #354f52;
  position: relative;

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: end;
  }

  h4 {
    padding: 0px 10px;
    font-size: 24px;
    font-weight: 600;
    border-right: 1px solid white;
    height: 65px;
  }
`;
