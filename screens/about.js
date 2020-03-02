import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.aboutTitleText}>About Founder Tribe</Text>
      <Text style={styles.aboutText}>
        Founder Tribe brings together talented solo founders with shared values.
      </Text>
      <Text style={styles.aboutText}>
        Fellow tribe members help solve each other's problems, meeting regularly
        in London at our events and remotely too.
      </Text>
      <Text style={styles.aboutText}>
        Founder Tribe creates tools, mechanisms, frameworks and processes to
        ensure the tribe's success.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutText: {
    margin: 10
  },
  aboutTitleText: {
    margin: 10,
    fontWeight: "bold"
  }
});
