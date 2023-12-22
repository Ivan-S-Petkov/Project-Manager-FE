import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home";
import Employees from "./components/pages/Employees";
import Projects from "./components/pages/Projects";
import Navigation from "./components/atoms/Navigation";
import Assign from "./components/pages/Assign";
import EmployeeDetails from "./components/molecules/EmployeeDetails";
import EmployeeEdit from "./components/molecules/EmployeeEdit";
import ErrorProvider from "./providers/ErrorProvider";
import Error from "./components/atoms/Error";
import ProjectEdit from "./components/molecules/ProjectEdit";
import ProjectDetails from "./components/molecules/ProjectDetails";
import Tasks from "./components/pages/Tasks";
import Footer from "./components/atoms/Footer";

function App() {
  return (
    <Wrapper>
      <Content>
        <ErrorProvider>
          <Error />
          <Navigation />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/employees/:id" element={<EmployeeDetails />} />
            <Route path="/employees/:id/edit" element={<EmployeeEdit />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/projects/:id/edit" element={<ProjectEdit />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/assign" element={<Assign />} />
          </Routes>
        </ErrorProvider>
      </Content>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export default App;
