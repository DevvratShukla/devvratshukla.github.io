import React, { Component } from "react";
import "../components/profile-picture.css";

class ProfilePicture extends Component {
  render() {
    const { src, rotate, type, height, width } = this.props;

    const imgStyleRound = {
      "border-radius": "50%",
      height,
      width
    };

    const imgStyleCurvedEdges = {
      "border-radius": "10%",
      height,
      width
    };

    return (
      <img
        src={src}
        style={type === "circular" ? imgStyleRound : imgStyleCurvedEdges}
        className={rotate === true ? "profile-pic" : ""}
        alt="pic"
      />
    );
  }
}

export default ProfilePicture;
