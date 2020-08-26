import React from "react";
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {

  return (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Wetaca</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  </Navbar>
  );
}

export default NavbarComponent;
