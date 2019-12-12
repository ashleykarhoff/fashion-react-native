import React, { Component } from "react";
import { View } from "react-native";
import SwipeableImage from "./SwipeableImage";

class Swipe extends Component {
  state = {
    items: []
  };

  async getItems() {
    fetch("http://localhost:3000/api/v1/items")
      .then(resp => resp.json())
      .then(items => this.setState({ items: items }));
  }

  componentDidMount() {
    this.getItems();
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {this.state.items.map(item => (
          <SwipeableImage source={item.image_url} />
        ))}
      </View>
    );
  }
}

export default Swipe;
