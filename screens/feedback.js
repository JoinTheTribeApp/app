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
      title: "Simon Hulme",
      venture: "Finance Workshop #2",
      rating: 1,
      body: "None",
      key: "1"
    },
    {
      title: "Cyrille Najjar",
      venture: "Prototyping #2",
      rating: 1,
      body: "None",
      key: "2"
    },
    {
      title: "Itxaso Del Palacio",
      venture: "Entrepreneurial Funding #1",
      rating: 1,
      body: "None",
      key: "3"
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
      <View style={globalStyles.container}>
        <Text style={styles.titleText}>Feedback on Founder Tribe</Text>
        <Text style={styles.bodyText}>
          Your feedback in incredibly valuable. Use the plus button to submit
          feedback regarding today's workshop
        </Text>
      </View>
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
            onPress={() => navigation.navigate("TeacherDetails", item)}
          >
            <Card style={styles.foundercards}>
              <Image
                style={styles.avatars}
                source={images.avatarsTeachers[item.key]}
              />
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
    borderWidth: 3,
    borderColor: "#f5633b",
    color: "#f5633b",
    paddingTop: 10,
    paddingBottom: 4,
    paddingLeft: 9,
    paddingRight: 3,
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
  },
  bodyText: {
    margin: 10
  },
  titleText: {
    margin: 10,
    fontWeight: "bold"
  },
  pressText: {
    fontSize: 20,
    lineHeight: 100,
    alignSelf: "center"
  }
});
