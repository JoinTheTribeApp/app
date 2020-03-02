import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default function Home({ navigation }) {
  const [modelOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Abi Owolabi",
      avatar: "../assets/star.png",
      venture: "Blacwxlf",
      rating: 1,
      body: "No notes",
      key: "1"
    },
    {
      title: "Adil Dewan",
      venture: "Nuts of Argania",
      rating: 1,
      body: "No notes",
      key: "2"
    },
    {
      title: "Alex McKeeman",
      venture: "Filt",
      rating: 1,
      body: "No notes",
      key: "3"
    },
    {
      title: "Alicia Norton",
      venture: "Treacle Health",
      rating: 4,
      body: "No notes",
      key: "4"
    },
    {
      title: "Ash Staines",
      venture: "DoubleTapp",
      rating: 4,
      body: "No notes",
      key: "5"
    },
    {
      title: "Ben Curtis",
      venture: "Aviation Experience Days",
      rating: 4,
      body: "No notes",
      key: "6"
    },
    {
      title: "Claud Williams",
      venture: "Dream Nation",
      rating: 4,
      body: "No notes",
      key: "7"
    },
    {
      title: "Claudine Adeyemi",
      venture: "Career Ear",
      rating: 4,
      body: "No notes",
      key: "8"
    },
    {
      title: "Fleur Colvile",
      venture: "Mix & Rise",
      rating: 4,
      body: "No notes",
      key: "9"
    },
    {
      title: "Guy Wilkinson",
      venture: "Carbon Emissions Reduction",
      rating: 4,
      body: "No notes",
      key: "10"
    },
    {
      title: "Hasan Sukkar",
      venture: "Dogger",
      rating: 4,
      body: "No notes",
      key: "11"
    },
    {
      title: "Hugo Besley",
      venture: "Studio Systems",
      rating: 4,
      body: "No notes",
      key: "12"
    },
    {
      title: "Maxxwell Firth",
      venture: "Founder Tribe",
      rating: 5,
      body: "No notes",
      key: "13"
    }
  ]);

  const addReview = review => {
    review.key = Math.random().toString();
    setReviews(currentReviews => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modelOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("TodoDetails", item)}
          >
            <Card style={styles.foundercards}>
              <Image style={styles.avatars} source={images.avatars[item.key]} />
              <Text style={globalStyles.titleText}>{item.title}</Text>
              <Text style={globalStyles.titleText}></Text>
              <Text style={globalStyles.titleText}>{item.venture}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center"
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  },
  modalContent: {
    flex: 1
  },
  avatars: {
    height: 75,
    width: 75,
    right: 0,
    position: "absolute"
  },
  foundercards: {
    height: 200
  }
});
