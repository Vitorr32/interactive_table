import React from "react";

import Logo from '../../resources/images/logo-4all-white.png'

import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

export default ({ characteristics }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/home">
      <img
        src={Logo}
        alt="logo-4all-white"
        width="50"
        height="50"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home">ABOUT 4ALL</Nav.Link>
      {/* Each characteristic will generate a link to it  */}
      {characteristics.map(characteristic => (
        <Nav.Link key={characteristic.label} href={`/${characteristic.label}`}>
          {characteristic.label}
        </Nav.Link>
      ))}
    </Nav>
  </Navbar>
);
