import React, { Component } from "react";
import "./Home.css";
import carinha from '../../resources/images/logo-carinha-white.png'
export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="lado-cor">
        <img className="face" src={carinha} alt="logo 4all carinha branco" width="50%" height="50%"/> 
        </div>
        <div className="lado-txt">
        <h1>The good design</h1>
        <h2>for all.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec sodales, metus at fermentum pellentesque, tortor risus
          dapibus neque, et tempor dolor sapien quis eros. Aliquam porttitor
          rhoncus enim. In porttitor iaculis sem.
        </p>
        </div>
      </div>
    );
  }
}
