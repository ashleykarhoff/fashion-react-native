import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { getSavedItems } from "../redux/actions";

class Board extends Component {
  componentDidMount = () => {
    this.props.getSavedItems();
  };

  render() {
    if (!this.props.savedItems) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <View>
        {this.props.savedItems.map(boardItem => (
          <Text>{boardItem.item.name}</Text>
        ))}
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { items } = state.savedItems;
  return {
    savedItems: items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSavedItems: () => dispatch(getSavedItems())
  };
}

// export default Board;

export default connect(mapStateToProps, mapDispatchToProps)(Board);
