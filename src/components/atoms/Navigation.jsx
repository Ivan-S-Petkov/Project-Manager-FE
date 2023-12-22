import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Navigation() {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/employees">Employees</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/assign">Assign</Link>
    </Nav>
  );
}

const Nav = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;
  color: #2f3e46;
  font-family: "Work Sans";
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  margin: 4px 7px;
  color: #191919;
  font-weight: 400;
  &.active {
    font-weight: 900;
    border-radius: 4px;
  }
`;

export default Navigation;
