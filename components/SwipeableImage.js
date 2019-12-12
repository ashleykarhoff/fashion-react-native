import React, { Component } from "react";
import { Image } from "react-native";

class SwipeableImage extends Component {
  render() {
    return (
      <Image
        style={{ width: 370, height: 500 }}
        source={{ uri: this.props.source }}
      ></Image>
    );
  }
}

export default SwipeableImage;
