import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 className="appTitle">RASMUS REACT TODO-APP</h1>
      <nav>
        <Link to="/" style={menuItemStyle}>
          HOME
        </Link>
        <Link to="/todos" style={menuItemStyle}>
          TODOS
        </Link>
        <Link to="/info" style={menuItemStyle}>
          INFO
        </Link>
      </nav>
    </header>
  );
};

export default Header;

// Styles
const headerStyle = {
  color: "#eab2a0",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const menuItemStyle = {
  fontSize: "3rem",
  margin: "0 10px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  color: "#eab2a0",
  textDecoration: "none",
};
