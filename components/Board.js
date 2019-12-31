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
    this.props.getSavedItems();
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  handleShowPage = item => {
    this.props.navigation.navigate("Show", { id: item.id });
  };

  render() {
    if (this.props.board === undefined) {
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
    board: state.savedItems.board[0]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showItem: item => dispatch(showItem(item)),
    getSavedItems: () => dispatch(getSavedItems())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
