import React, { Component } from "react";
import { SafeAreaView, FlatList, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getSavedItems } from "./../redux/actions";
import { styles } from "../assets/styles";

class Board extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      headerLeft: () => (
        <TouchableOpacity
          style={styles.leftIcon}
          onPress={() => navigation.navigate("Home")}
        >
          <Image source={require("../assets/images/back.png")} />
        </TouchableOpacity>
      )
    };
  };

  componentDidMount() {
    this.props.user ? this.props.getSavedItems(this.props.boardId) : null;
  }

  componentDidUpdate(prevProps) {
    // Trigger a re-render to remove deleted item from board
    this.props !== prevProps
      ? this.props.getSavedItems(this.props.boardId)
      : null;
  }

  handleShowPage = item => {
    this.props.navigation.navigate("Show", { id: item.id });
  };

  render() {
    if (this.props.boardItems.length === 0) {
      return (
        <View style={styles.emptyBoard}>
          <Text style={styles.emptyBoardHeader}>Your board is empty!</Text>
          <Image
            style={styles.emptyBoardEmoji}
            source={require("../assets/images/frown.png")}
          />
          <Text style={styles.emptyBoardContent}>
            Return to the Discover page to start saving items.
          </Text>
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
