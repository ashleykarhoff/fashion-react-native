import React, { Component } from "react";
import { View, Button } from "react-native";
import SwipeableImage from "./SwipeableImage";

class Swipe extends Component {
  state = {
    items: [],
    item: [],
    saveItem: undefined
  };

  async getItems() {
    fetch("http://localhost:3000/api/v1/items")
      .then(resp => resp.json())
      .then(items => this.setState({ items: items, item: items[0] }));
  }

  nextItem = () => {
    const currentItem = this.state.items.filter(i => i === this.state.item)[0];
    const nextItem = this.state.items[currentItem.id + 1];

    if (nextItem === undefined) {
      console.log("undefined");
    } else {
      this.setState({ item: nextItem, saveItem: undefined });
    }
  };

  componentDidUpdate(prevState) {
    if (prevState.saveItem !== this.state.saveItem) {
      this.nextItem();
    }
  }

  componentDidMount() {
    this.getItems();
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* {this.state.items.map(item => (
          <SwipeableImage key={item.id} source={item.image_url} />
        ))} */}
        <SwipeableImage
          key={this.state.item.id}
          index={this.state.item.id - 1}
          source={this.state.item.image_url}
        />
        <Button
          title="Yes"
          onPress={() => this.setState({ saveItem: true })}
        ></Button>
        <Button
          title="No"
          onPress={() => this.setState({ saveItem: false })}
        ></Button>
      </View>
    );
  }
}

export default Swipe;
