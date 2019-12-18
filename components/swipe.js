import React, { Component } from "react";
import { View, Text } from "react-native";

class Swipe extends Component {
  state = {};
  render() {
    return (
      <View>
        <Text>Swipe Container</Text>
      </View>
    );
  }
}

export default Swipe;

// import React, { Component } from "react";
// import { View, Button } from "react-native";
// import SwipeableImage from "./SwipeableImage";

// handleSave = () => {
//   this.props.saveItem(this.state.item);
// };

// class Swipe extends Component {
//   render() {
//     return (
//       <View style={{ flex: 4, justifyContent: "center", alignItems: "center" }}>
//         <SwipeableImage
//           key={this.props.state.item.id}
//           index={this.props.state.item.id - 1}
//           source={this.props.state.item.image_url}
//         />
//         <View style={{ flexDirection: "row" }}>
//           <Button title="No" onPress={this.handleNext}></Button>
//           <Button title="Yes" onPress={this.handleSave}></Button>
//         </View>
//       </View>
//     );
//   }
// }

// export default Swipe;
