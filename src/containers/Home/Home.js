import React, { Component } from "react";
import "./Home.css";
import faceImage from '../../resources/images/logo-carinha-white.png'
export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="image-wrapper">
          <img src={faceImage} alt="4All Logo" />
        </div>
        <div className="content-wrapper">
          <div className="content">
            <h1>The good design</h1>
            <h2>for all.</h2>
            <p>
              A simple and intuitive interactive catalog for designers and developers to design interfaces for usable accessibility.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
