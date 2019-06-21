import React from "react";

import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

export default ({ characteristics }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/home">
      <img href={"https://via.placeholder.com/100"} alt="Placeholder" />
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      {/* Each characteristic will generate a link to it  */}
      {characteristics.map(characteristic => (
        <Nav.Link key={characteristic.label} href={`/${characteristic.label}`}>
          {characteristic.label}
        </Nav.Link>
      ))}
    </Nav>
  </Navbar>
);
