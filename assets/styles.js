import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: "white"
  },
  card: {
    flex: 0.75,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  },
  image: {
    flex: 0.75,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  },
  board: {
    alignSelf: "center"
  },
  itemPageImage: {
    width: 372,
    height: 582,
    alignSelf: "center"
  },
  itemInfo: {
    // alignSelf: "center"
    margin: 20
  }
});

export default styles;
