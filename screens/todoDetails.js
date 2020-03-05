import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity
} from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function TodoDetails({ navigation }) {
  const rating = navigation.getParam("rating");
  const avatar = navigation.getParam("avatar");
  const key = navigation.getParam("key");
  const website = navigation.getParam("website");
  const linkedin = navigation.getParam("linkedin");
  return (
    <View style={globalStyles.container}>
      <Card>
        <Image style={styles.qrcode} source={{ uri: images.qrcodes[key] }} />
        <Image style={styles.avatars} source={images.avatars[key]} />
        <Text style={styles.profileHeader}>Name:</Text>
        <Text style={styles.profileText}>{navigation.getParam("title")}</Text>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              linkedin || "http://linkedin.com/company/foundertribe/"
            )
          }
          style={
            (styles.profileText,
            {
              fontSize: 16,
              fontWeight: "bold",
              marginLeft: 5
            })
          }
        >
          <Text
            style={(styles.profileText, { color: "#4875B4", fontSize: 16 })} // linkedin blue
          >
            <Ionicons name="logo-linkedin" size={16} color="#4875B4" />
            {/* linkedin blue */}
            {/* &nbsp;{linkedin} */}
            &nbsp;LinkedIn Profile
          </Text>
        </TouchableOpacity>

        <Text style={styles.profileHeader}>Venture:</Text>
        <Text style={styles.profileText}>{navigation.getParam("venture")}</Text>

        <TouchableOpacity
          onPress={() => Linking.openURL(website || "https://foundertribe.org")}
          style={
            (styles.profileText,
            {
              color: "#f5633b", // Founder Tribe Orange
              fontSize: 16,
              fontWeight: "bold",
              marginLeft: 5
            })
          }
        >
          <Text
            style={(styles.profileText, { color: "#f5633b", fontSize: 16 })}
          >
            <Ionicons name="md-link" size={16} color="#f5633b" />
            {/* Founder Tribe Orange */}
            &nbsp;{website}
          </Text>
        </TouchableOpacity>

        {/* <View style={styles.profileText} style={StyleSheet.rating}>
          <Text style={styles.profileHeader}>Membership:</Text>
          <Text style={styles.profileText}>
            Premium Member&nbsp;
            <Image style={styles.stars} source={images.ratings[rating]} />
          </Text>
          <Text style={styles.profileHeader}>Notes:</Text>
          <Text style={styles.profileText}>{navigation.getParam("body")}</Text>
        </View> */}
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  qrcode: {
    width: 330,
    height: 330
  },
  avatars: {
    width: 100,
    height: 100,
    position: "absolute",
    right: 30,
    top: 330
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
