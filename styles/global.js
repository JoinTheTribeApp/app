import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#333"
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6
  }
});

export const images = {
  ratings: {
    "1": require("../assets/star.png"),
    "2": require("../assets/star.png"),
    "3": require("../assets/star.png"),
    "4": require("../assets/star.png"),
    "5": require("../assets/star.png")
  },
  avatars: {
    "1": require("../assets/founders/1.jpg"),
    "2": require("../assets/founders/2.jpg"),
    "3": require("../assets/founders/3.jpg"),
    "4": require("../assets/founders/4.jpg"),
    "5": require("../assets/founders/5.jpg")
  }
};
