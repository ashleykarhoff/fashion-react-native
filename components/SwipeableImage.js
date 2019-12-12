import React, { Component } from "react";
import { Image } from "react-native";

class SwipeableImage extends Component {
  render() {
    return (
      <Image
        style={{ width: 311, height: 450 }}
        source={{ uri: this.props.source }}
      ></Image>
    );
  }
}

export default SwipeableImage;
