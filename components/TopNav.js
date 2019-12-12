import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class TopNav extends Component {
  // state = {  }
  render() {
    return (
      <View
        style={{
          flex: 0.5,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          backgroundColor: "powderblue"
        }}
      >
        <Button title="Logout"></Button>
        <Text style={{ paddingBottom: 10 }}>DISCOVER</Text>
        <Button title="Board"></Button>
      </View>
    );
  }
}

export default TopNav;
