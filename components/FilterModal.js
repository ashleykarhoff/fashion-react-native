import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View, Alert } from "react-native";
import { setModalVisibility } from "./../redux/actions";
import { connect } from "react-redux";

class FilterModal extends Component {
  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.props.setModalVisibility();
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    modalVisible: state.itemFilter.modalVisible
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setModalVisibility: () => dispatch(setModalVisibility())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterModal);
