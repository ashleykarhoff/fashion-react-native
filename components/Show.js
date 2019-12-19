import React, { Component } from "react";
import { View, Text, Image, Button } from "react-native";
import { connect } from "react-redux";
import { fetchShowItem } from "../redux/actions";

class Show extends Component {
  componentDidMount = () => {
    const itemId = this.props.navigation.getParam("id");
    this.props.fetchShowItem(itemId);
  };

  render() {
    if (!this.props.showItem) {
      return (
        <View>
          <Text>Nothing to see here!</Text>
        </View>
      );
    }
    return (
      <View>
        <Image
          source={{ uri: this.props.showItem.item.image_url }}
          style={{ width: 372, height: 582 }}
        />
        <Text>{this.props.showItem.item.name}</Text>
        <Text>{this.props.showItem.item.brand}</Text>
        <Text>${this.props.showItem.item.price}</Text>
        <Button title="Purchase"></Button>
        <Button title="Delete"></Button>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    showItem: state.showItem[0]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchShowItem: id => dispatch(fetchShowItem(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Show);
