import React, { Component } from "react";
import image from "./img/devvrat-profile-pic.jpg";
import "./App.css";

class App extends Component {
  render() {
    const imgStyle = {
      "border-radius": "50%"
    };

    return (
      <div className="App">
        <header className="App-header">
          <img style={imgStyle} src={image} className="App-logo" alt="logo" />
          <p>Hi, I am Devvrat. A full Stack Developer.</p>
        </header>
      </div>
    );
  }
}

export default App;
