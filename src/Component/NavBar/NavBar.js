import React from "react";
import istLogo from "../../images/istLogo.png";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import useAuth from "../hooks/useAuth";

function NavBar() {
  const { user, logOut } = useAuth();
  return (
    <Navbar
      className="navBar"
      variant="dark"
      collapseOnSelect
      expand="md"
      sticky="top"
    >
      <Container>
        <img
          className="logoImg"
          style={{ width: "100px", height: "100px", paddingRight: "10px" }}
          src={istLogo}
          alt=""
        />
        <Navbar.Brand
          style={{ fontSize: "35px", color: "black", fontWeight: "bold" }}
        >
          IST Online Library
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/home" className="navLink">
              Home
            </NavLink>
            <NavLink to="/books/allBooks" className="navLink">
              Books
            </NavLink>
            <NavLink to="/dashboards" className="navLink">
              Dashboard
            </NavLink>
            {user.email && (
              <span className="user-name">{user.email} </span>
            )}
            {user.email ? (
              <button onClick={logOut} className="navLink">
                SignOut
              </button>
            ) : (
              <NavLink to="/login" className="navLink">
                LOGIN
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
