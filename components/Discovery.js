import React, { Component } from "react";
import { Button, View, Text, Image } from "react-native";
import { connect } from "react-redux";
import Swiper from "react-native-deck-swiper";
import { fetchItems } from "./../redux/actions";
import styles from "../assets/styles";

class Discovery extends Component {
  componentDidMount = () => {
    this.props.getItems();
  };

  render() {
    // npm package has a bug that won't re-render Swiper cards
    if (this.props.item) {
      console.log("error");
      return (
        <View>
          <Text>Test</Text>
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
            console.log(item);
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
    getItems: () => dispatch(fetchItems())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Discovery);