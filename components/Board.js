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
import styles from "../assets/styles";

class Board extends Component {
  handleShowPage = item => {
    this.props.navigation.navigate("Show", { id: item.id });
  };

  render() {
    if (this.props.boardItems.length === 0) {
      return (
        <View>
          <Text>Nothing to see here...</Text>
        </View>
      );
    }

    return (
      <SafeAreaView style={styles.board}>
        <FlatList
          data={this.props.boardItems}
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
    boardItems: state.savedItems.board[0].board_items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showItem: item => dispatch(showItem(item))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
