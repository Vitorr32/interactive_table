import React from "react";

import Logo from '../../resources/images/logo-4all-black.png'

import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

export default ({ characteristics }) => (
  <Navbar bg="light" variaton="light">
    <Navbar.Brand href="/home">
      <img
        src={Logo}
        alt="logo-4all-black"
        width="100"
        height="44,5"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link className="hvr-underline-from-left" href="/home">ABOUT</Nav.Link>
      {/* Each characteristic will generate a link to it  */}
      {characteristics.map(characteristic => (
        <Nav.Link className="hvr-underline-from-left" key={characteristic.label} href={`/${characteristic.label}`}>
          {characteristic.label}
        </Nav.Link>
      ))}
    </Nav>
  </Navbar>
);
