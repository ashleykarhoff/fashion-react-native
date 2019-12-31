import React, { Component } from "react";
import { View, Text, Image, Button } from "react-native";
import { connect } from "react-redux";
import Swiper from "react-native-deck-swiper";
import { fetchItems, persistItem, signOut } from "./../redux/actions";
import styles from "../assets/styles";

class Discovery extends Component {
  componentDidMount = () => {
    this.props.getItems();
  };

  componentDidUpdate = () => {
    this.props.session === undefined
      ? this.props.navigation.navigate("AuthStack")
      : null;
  };

  handleSwipeRight = cardIndex => {
    const itemObj = this.props.items[cardIndex];
    const userObj = this.props.user;

    userObj.boards
      ? this.props.persistItem(itemObj, userObj.boards[0].id) // item object and board id
      : null;
  };

  render() {
    const { items, navigation, board } = this.props;
    // npm package has a bug that won't re-render Swiper cards
    if (!items || !board) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Swiper
          cards={items}
          renderCard={card => {
            return (
              <View style={styles.image}>
                <Image
                  source={{ uri: card.image_url }}
                  style={{ width: 372, height: 582 }}
                />
              </View>
            );
          }}
          onSwipedRight={this.handleSwipeRight}
          backgroundColor={"#4FD0E9"}
          stackSize={3}
        ></Swiper>
        <Button
          title="Go to board"
          onPress={() => navigation.navigate("Board")}
        ></Button>
        <Button
          title="Logout"
          // onPress={() => navigation.navigate("AuthStack")}
          onPress={() => this.props.signOut()}
        ></Button>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items.allItems,
    board: state.board.boards,
    user: state.user.user,
    session: state.session.session
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => dispatch(fetchItems()),
    persistItem: (item, boardId) => dispatch(persistItem(item, boardId)),
    signOut: () => dispatch(signOut())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Discovery);
