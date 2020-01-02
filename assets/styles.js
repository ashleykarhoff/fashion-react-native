import { StyleSheet } from "react-native";

export const colors = {
  white: "#ffffff",
  grey: "#505050",
  red: "#cc0000",
  orange: "#ff7433",
  lightOrange: "#ffeee6",
  peach: "#f8b195",
  pink: "#f67280",
  pinkPurple: "#c06c84",
  purple: "6c5b78",
  navy: "#355c7d"
};

export const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: colors.peach
  // },
  card: {
    flex: 0.75,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: colors.white
  },
  image: {
    flex: 0.75,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: colors.white
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
    margin: 20
  },
  navBoard: {
    marginRight: 20,
    fontSize: 16
  },
  formNav: {
    backgroundColor: colors.navy,
    borderBottomWidth: 0
  },
  formContainer: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30
  },
  formHeaderContainer: {
    height: 80,
    backgroundColor: colors.navy,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  formHeader: {
    fontSize: 26,
    color: colors.white,
    fontWeight: "bold",
    marginBottom: 30
  },
  formTextContainer: {
    marginTop: 20
  },
  formTextInput: {
    borderColor: colors.navy,
    borderWidth: 0.5,
    borderRadius: 25,
    height: 40,
    paddingLeft: 15,
    fontSize: 16,
    color: colors.navy,
    fontWeight: "400",
    letterSpacing: 0.5
  },
  formTextError: {
    color: colors.red
  },
  formPrimaryBtn: {
    height: 40,
    marginTop: 50,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.pink
  },
  formPrimaryBtnText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.white,
    letterSpacing: 0.5
  },
  formSecondaryBtn: {
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: colors.white,
    height: 40,
    borderColor: colors.pink,
    borderWidth: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  formSecondaryBtnText: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.pink,
    letterSpacing: 0.5
  },
  leftIcon: {
    paddingLeft: 20
  },
  boardIcon: {
    paddingRight: 20
  },
  emptyBoard: {
    marginTop: 50,
    marginLeft: 65,
    marginRight: 65,
    alignItems: "center"
  },
  emptyBoardHeader: {
    fontSize: 24,
    fontWeight: "500"
  },
  emptyBoardEmoji: {
    marginTop: 20
  },
  emptyBoardContent: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center"
  }
});
