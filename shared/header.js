import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <ImageBackground
      source={require("../assets/founder-tribe-logo-banner-x2.png")}
      style={styles.header}
    >
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        {/* <Text style={styles.headerText}>{title}</Text> */}
        {/* <Image
          style={styles.headerImage}
          source={require("../assets/logo.png")}
        /> */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 0,
    width: width,
    height: 150,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center"
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    letterSpacing: 1
  },
  headerImage: {
    width: 25,
    height: 25,
    marginLeft: 10
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center"
  },
  icon: {
    position: "absolute",
    left: 25,
    marginTop: 60,
    color: "white"
  }
});
