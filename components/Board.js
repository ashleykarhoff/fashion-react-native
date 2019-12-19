import React, { Component } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  View,
  Text,
  Image
} from "react-native";
import { connect } from "react-redux";
import { getSavedItems } from "../redux/actions";
import styles from "../assets/styles";

class Board extends Component {
  componentDidMount = () => {
    this.props.getSavedItems();
  };

  handleShowPage = item => {
    this.props.navigation.navigate("Show", { id: item.id });
  };

  render() {
    if (this.props.savedItems === []) {
      return (
        <View>
          <Text>Nothing to see here...</Text>
        </View>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.props.savedItems}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.handleShowPage(item)}>
              <Image
                source={{ uri: item.item.image_url }}
                style={{ width: 372, height: 582 }}
              />
            </TouchableOpacity>
          )}
          keyExtractor={boardItem => boardItem.id}
        />
      </SafeAreaView>
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
    getSavedItems: () => dispatch(getSavedItems()),
    showItem: item => dispatch(showItem(item))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
