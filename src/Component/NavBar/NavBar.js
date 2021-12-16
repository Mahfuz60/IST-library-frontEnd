import React from "react";
import istLogo from "../../images/istLogo.png";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
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
            <NavLink to="/dashboard" className="navLink">
              Dashboard
            </NavLink>

            {/* <NavLink href="#about"  to="/about" className="navLink">
              About
            </NavLink> */}

            <NavLink to="/login" className="navLink">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
