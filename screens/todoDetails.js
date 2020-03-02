import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

export default function TodoDetails({ navigation }) {
  const rating = navigation.getParam("rating");
  const key = navigation.getParam("key");
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("body")}</Text>
        <View style={StyleSheet.rating}>
          <Text>Member Type: </Text>
          <Image source={images.ratings[rating]} />
          <Text>Avatar: </Text>
          <Image style={styles.pics} source={images.avatars[key]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  pics: {
    width: 250,
    height: 250
  }
});
