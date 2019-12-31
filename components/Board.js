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
import { getSavedItems } from "./../redux/actions";
import styles from "../assets/styles";

class Board extends Component {
  componentDidMount() {
    this.props.user ? this.props.getSavedItems(this.props.boardId) : null;
  }

  handleShowPage = item => {
    this.props.navigation.navigate("Show", { id: item.id });
  };

  render() {
    if (this.props.boardItems === [] || this.props.boardItems === undefined) {
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
    user: state.user.user,
    boardItems: state.board.boardItems,
    boardId: state.user.user.boards[0].id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSavedItems: boardId => dispatch(getSavedItems(boardId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
