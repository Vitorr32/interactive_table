
import React, { Component } from "react";

import Page from "../Page/Page";
import characteristics from "../../resources/data/characteristics";
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Form, FormControl, Button }  from 'react-bootstrap';
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCharacteristic: null
    };
  }

  componentWillMount() {
    if (characteristics.length !== 0) {
      this.setState({ selectedCharacteristic: characteristics[0] });
    }
  }

  render() {
    return (
      <div className="App">
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#about4all">Navbar</Navbar.Brand>
    <Nav className="mr-auto"> 
      <Nav.Link href="#about4all">About 4All</Nav.Link>
      <Nav.Link href="#accessibility">Accessibility</Nav.Link>
      <Nav.Link href="#usability">Usability</Nav.Link>
    </Nav>
  </Navbar>
  <br />
        {characteristics.map(characteristic => (
          <Page
            key={characteristic.label}
            characteristic={characteristic}
            show={this.state.selectedCharacteristic === characteristic}
          />
        ))}
      </div>
    )
  }
}
