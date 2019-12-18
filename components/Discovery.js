import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { fetchItems } from "./../redux/actions";
import Swipe from "./Swipe";
import store from "../redux/store";

class Discovery extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    store
      .dispatch(fetchItems())
      .then(resp => this.setState({ items: resp.data }));
  }

  render() {
    return (
      <View style={{ flex: 4, justifyContent: "center", alignItems: "center" }}>
        <Text>Discovery Container </Text>
        {this.state.items.map(i => (
          <Text key={i.id}>{i.name}</Text>
        ))}
        <Swipe />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Discovery);
