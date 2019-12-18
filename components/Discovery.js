import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { connect } from "react-redux";
import Swiper from "react-native-deck-swiper";
import { fetchItems } from "./../redux/actions";
// import Swipe from "./Swipe";
import store from "../redux/store";
import styles from "../assets/styles";

class Discovery extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    store
      .dispatch(fetchItems())
      .then(resp => this.setState({ items: resp.data }));
  }

  render() {
    return (
      //   <View style={{ flex: 4, justifyContent: "center", alignItems: "center" }}>
      //     <Text>Discovery Container </Text>
      //     {this.state.items.map(i => (
      //       <Text key={i.id}>{i.name}</Text>
      //     ))}
      //     <Swipe />
      //   </View>
      <View style={styles.container}>
        <Swiper
          cards={["DO", "MORE", "OF", "WHAT", "MAKES", "YOU", "HAPPY"]}
          renderCard={card => {
            return (
              <View style={styles.card}>
                <Text style={styles.text}>{card}</Text>
              </View>
            );
          }}
          onSwiped={cardIndex => {
            console.log(cardIndex);
          }}
          onSwipedAll={() => {
            console.log("onSwipedAll");
          }}
          cardIndex={0}
          backgroundColor={"#4FD0E9"}
          stackSize={3}
        >
          {/* <Button
            onPress={() => {
              console.log("oulala");
            }}
            title="Press me"
          >
            You can press me
          </Button> */}
        </Swiper>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Discovery);
