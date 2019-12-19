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

  render() {
    if (this.props.savedItems === []) {
      return (
        <View>
          <Text>Nothing to see here...</Text>
        </View>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.props.savedItems}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={
                () => this.props.navigation.navigate("Show", { id: item.id })
                // console.log("pressin", item)
              }
            >
              <Image
                source={{ uri: item.item.image_url }}
                style={{ width: 372, height: 582 }}
              />
            </TouchableOpacity>
          )}
          keyExtractor={boardItem => boardItem.id}
        />
      </SafeAreaView>
      //   <SafeAreaView style={styles.container}>
      //     <FlatList
      //       data={this.props.savedItems}
      //       renderItem={({ item }) => (
      //         <Image
      //           source={{ uri: item.item.image_url }}
      //           style={{ width: 372, height: 582 }}
      //           onPress={() =>
      //             // this.props.navigation.navigate("Show", { id: item.id })
      //             console.log("pressin")
      //           }
      //         />
      //       )}
      //       keyExtractor={boardItem => boardItem.id}
      //     />
      //   </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  const { items } = state.savedItems;
  return {
    savedItems: items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSavedItems: () => dispatch(getSavedItems())
  };
}

// export default Board;

export default connect(mapStateToProps, mapDispatchToProps)(Board);
