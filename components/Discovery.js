import React, { Component } from "react";
import { View, Text, Image, Button } from "react-native";
import { connect } from "react-redux";
import Swiper from "react-native-deck-swiper";
import { fetchItems, persistItem } from "./../redux/actions";
import styles from "../assets/styles";

class Discovery extends Component {
  componentDidMount = () => {
    this.props.getItems();
  };

  handleSwipeRight = cardIndex => {
    const itemObj = this.props.items[cardIndex];
    const userObj = this.props.user;

    userObj.boards
      ? this.props.persistItem(itemObj, userObj.boards[0].id) // item object and board id
      : null;
  };

  render() {
    // npm package has a bug that won't re-render Swiper cards
    if (!this.props.items || !this.props.board) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Swiper
          cards={this.props.items}
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
          onPress={() => this.props.navigation.navigate("Board")}
        ></Button>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items.allItems,
    board: state.savedItems.boards,
    userId: state.session.session,
    session: state.session.session,
    user: state.user.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => dispatch(fetchItems()),
    persistItem: (item, userId) => dispatch(persistItem(item, userId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Discovery);
