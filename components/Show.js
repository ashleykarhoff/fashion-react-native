import React, { Component } from "react";
import { View, Text, Image, Button } from "react-native";
import { Linking } from "expo";
import { connect } from "react-redux";
import { fetchShowItem, handleDelete } from "../redux/actions";
import { styles } from "../assets/styles";
import { TouchableOpacity } from "react-native-gesture-handler";

class Show extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      headerLeft: () => (
        <TouchableOpacity
          style={styles.leftIcon}
          onPress={() => navigation.navigate("Board")}
        >
          <Image source={require("../assets/images/back.png")} />
        </TouchableOpacity>
      )
    };
  };

  componentDidMount = () => {
    const itemId = this.props.navigation.getParam("id");
    this.props.fetchShowItem(itemId);
  };

  onDelete = id => {
    this.props.handleDelete(id);
    this.props.navigation.navigate("Board");
  };

  handlePress = () => {
    Linking.openURL(this.props.item.product_url);
  };

  render() {
    if (!this.props.item) {
      return (
        <View>
          <Text>Nothing to see here!</Text>
        </View>
      );
    }
    return (
      <View>
        <Image
          source={{ uri: this.props.item.image_url }}
          style={styles.itemPageImage}
        />
        <View style={styles.itemInfo}>
          <Text>{this.props.item.name}</Text>
          <Text>{this.props.item.brand}</Text>
          <Text>${this.props.item.price}</Text>
        </View>
        {/* <TouchableOpacity>
          <Text>Purchase</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Delete</Text>
        </TouchableOpacity> */}
        <Button title="Purchase" onPress={this.handlePress}></Button>
        <Button
          title="Delete"
          onPress={() => this.onDelete(this.props.boardItemId)}
        ></Button>
      </View>
    );
  }
}

function mapStateToProps(state) {
  //   console.log("SHOW ITEM:", state.showItem);
  return {
    boardItemId: state.showItem.item.id,
    item: state.showItem.item.item
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchShowItem: id => dispatch(fetchShowItem(id)),
    handleDelete: id => dispatch(handleDelete(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Show);
