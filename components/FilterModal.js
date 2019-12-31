import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View, Alert } from "react-native";

class FilterModal extends Component {
  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={true}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  // set modalVisible to false
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            // set modal visible to true
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default FilterModal;
