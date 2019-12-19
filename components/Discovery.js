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

  render() {
    // npm package has a bug that won't re-render Swiper cards
    if (!this.props.items) {
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
          onSwipedRight={cardIndex => {
            const item = this.props.items[cardIndex];
            this.props.saveItem(item, 1);
          }}
          onSwipedLeft={() => {
            // console.log("Nayyyy");
          }}
          onSwipedAll={() => {
            // console.log("onSwipedAll");
          }}
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
  const { allItems } = state.items;

  return {
    items: allItems
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => dispatch(fetchItems()),
    saveItem: (item, userId) => dispatch(persistItem(item, userId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Discovery);
