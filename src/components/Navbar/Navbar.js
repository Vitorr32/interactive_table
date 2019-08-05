import React from "react";

import Logo from '../../resources/images/logo-4all-black.png'

import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import { Nav } from "react-bootstrap";

import './Navbar.css';

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
      <Link to={'/home'} className="link hvr-underline-from-left">ABOUT</Link>
      {/* Each characteristic will generate a link to it  */}
      {characteristics.map(characteristic => (
        <Link className="link hvr-underline-from-left" key={characteristic.label} to={`/${characteristic.label}`}>
          {characteristic.label}
        </Link>
      ))}
    </Nav>
  </Navbar>
);
