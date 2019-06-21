import React, { Component } from "react";

import Page from "../Page/Page";
import characteristics from "../../resources/data/characteristics";

import { Switch, Route } from "react-router-dom";

import "./App.css";
import NavBar from "../../components/Navbar/Navbar";
import Home from "../Home/Home";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar characteristics={characteristics} />

        <Switch>
          {characteristics.map(characteristic => (
            <Route
              path={`/${characteristic.label}`}
              key={characteristic.label}
              render={props => (
                <Page {...props} characteristic={characteristic} />
              )}
            />
          ))}
          <Route component={Home} />
        </Switch>
      </div>
    );
  }
}
