import React, { Component } from "react";

import Page from "../Page/Page";
import characteristics from "../../resources/data/characteristics";

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
        <header className="App-header">Header</header>
        {characteristics.map(characteristic => (
          <Page
            key={characteristic.label}
            characteristic={characteristic}
            show={this.state.selectedCharacteristic === characteristic}
          />
        ))}
      </div>
    );
  }
}
