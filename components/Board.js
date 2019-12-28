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
    // Bandaid fix for bug where this.props.savedItems returns the # of items in savedItems instead of an object
    if (typeof this.props.savedItems !== "object") {
      return (
        <View>
          <Text>Nothing to see here...</Text>
        </View>
      );
    }

    return (
      <SafeAreaView style={styles.board}>
        <FlatList
          data={this.props.savedItems}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.handleShowPage(item)}>
              <Image
                source={{ uri: item.item.image_url }}
                style={{ width: 186, height: 291 }}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    savedItems: state.savedItems.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSavedItems: () => dispatch(getSavedItems()),
    showItem: item => dispatch(showItem(item))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
