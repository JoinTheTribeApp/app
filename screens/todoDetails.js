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
        <Image style={styles.avatars} source={images.avatars[key]} />
        <Text style={styles.profileHeader}>Name:</Text>
        <Text style={styles.profileText}>{navigation.getParam("title")}</Text>
        <Text style={styles.profileHeader}>Venture:</Text>
        <Text style={styles.profileText}>{navigation.getParam("venture")}</Text>
        <View style={styles.profileText} style={StyleSheet.rating}>
          <Text style={styles.profileHeader}>Membership:</Text>
          <Text style={styles.profileText}>
            Premium Member&nbsp;
            <Image style={styles.stars} source={images.ratings[rating]} />
          </Text>
          <Text style={styles.profileHeader}>Notes:</Text>
          <Text style={styles.profileText}>{navigation.getParam("body")}</Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  avatars: {
    width: 330,
    height: 330,
    right: 0
  },
  profileHeader: {
    fontSize: 16,
    marginTop: 5,
    marginLeft: 5,
    fontWeight: "bold"
  },
  profileText: {
    margin: 5,
    fontSize: 14
  },
  stars: {
    height: 15,
    width: 15
  }
});
