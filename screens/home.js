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
      body: "None",
      key: "1"
    },
    {
      title: "Adil Dewan",
      venture: "Nuts of Argania",
      rating: 1,
      body: "None",
      key: "2"
    },
    {
      title: "Alex McKeeman",
      venture: "Filt",
      rating: 1,
      body: "None",
      key: "3"
    },
    {
      title: "Alicia Norton",
      venture: "Treacle Health",
      rating: 4,
      body: "None",
      key: "4"
    },
    {
      title: "Ariel Kendall",
      venture: "Woke Comics",
      rating: 4,
      body: "None",
      key: "5"
    },
    {
      title: "Ash Staines",
      venture: "DoubleTapp",
      rating: 4,
      body: "None",
      key: "6"
    },
    {
      title: "Ben Curtis",
      venture: "Aviation Experience Days",
      rating: 4,
      body: "None",
      key: "7"
    },
    {
      title: "Claud Williams",
      venture: "Dream Nation",
      rating: 4,
      body: "None",
      key: "8"
    },
    {
      title: "Claudine Adeyemi",
      venture: "Career Ear",
      rating: 4,
      body: "None",
      key: "9"
    },
    {
      title: "Fleur Colvile",
      venture: "Mix & Rise",
      rating: 4,
      body: "None",
      key: "10"
    },
    {
      title: "Guy Wilkinson",
      venture: "Carbon Emissions Reduction",
      rating: 4,
      body: "None",
      key: "11"
    },
    {
      title: "Hasan Sukkar",
      venture: "Dogger",
      rating: 4,
      body: "None",
      key: "12"
    },
    {
      title: "Hugo Besley",
      venture: "Studio Systems",
      rating: 4,
      body: "None",
      key: "13"
    },
    {
      title: "Ina Bierylo",
      venture: "",
      rating: 4,
      body: "None",
      key: "14"
    },
    {
      title: "Ish Wijewardana",
      venture: "Strivy",
      rating: 4,
      body: "None",
      key: "15"
    },
    {
      title: "James Nightingall",
      venture: "HomeFinder",
      rating: 4,
      body: "None",
      key: "16"
    },
    {
      title: "James Stirrat",
      venture: "CircleOS",
      rating: 4,
      body: "None",
      key: "17"
    },
    {
      title: "Jaron Soh",
      venture: "Traktion",
      rating: 4,
      body: "None",
      key: "18"
    },
    {
      title: "Joel Gujral",
      venture: "Firedrop",
      rating: 4,
      body: "None",
      key: "19"
    },
    {
      title: "Karen Meynard",
      venture: "ACT!VATE",
      rating: 4,
      body: "None",
      key: "20"
    },
    {
      title: "Kat Merkalenko",
      venture: "Gifter",
      rating: 4,
      body: "None",
      key: "21"
    },
    {
      title: "Kate Nightingale",
      venture: "Pips",
      rating: 4,
      body: "None",
      key: "22"
    },
    {
      title: "Kiran Kotecha",
      venture: "LOKAL",
      rating: 4,
      body: "None",
      key: "23"
    },
    {
      title: "Lucia Banjo",
      venture: "Embrace",
      rating: 4,
      body: "None",
      key: "24"
    },
    {
      title: "Luke Billings",
      venture: "Kanbanchi Job Tracker",
      rating: 4,
      body: "None",
      key: "25"
    },
    {
      title: "Matthew Holding",
      venture: "",
      rating: 4,
      body: "None",
      key: "26"
    },
    {
      title: "Max Hampshire",
      venture: "",
      rating: 4,
      body: "None",
      key: "27"
    },
    {
      title: "Maxxwell Firth",
      venture: "Founder Tribe",
      rating: 5,
      body: "None",
      key: "28"
    },
    {
      title: "Melissa Yacoub",
      venture: "Discover Consultancy",
      rating: 5,
      body: "None",
      key: "29"
    },
    {
      title: "Natasha Eeles",
      venture: "Bold Voices",
      rating: 5,
      body: "None",
      key: "30"
    },
    {
      title: "Nathalie Stark",
      venture: "",
      rating: 5,
      body: "None",
      key: "31"
    },
    {
      title: "Nish Modasia",
      venture: "EN ROOT",
      rating: 5,
      body: "None",
      key: "32"
    },
    {
      title: "Patrick Dobinson",
      venture: "",
      rating: 5,
      body: "None",
      key: "33"
    },
    {
      title: "Pavel Kroupa",
      venture: "Carbon Accounting System",
      rating: 5,
      body: "None",
      key: "34"
    },
    {
      title: "Phoebe Jones",
      venture: "RecoverMe",
      rating: 5,
      body: "None",
      key: "35"
    },
    {
      title: "Sam Ducker",
      venture: "Anyone",
      rating: 5,
      body: "None",
      key: "36"
    },
    {
      title: "Suraj Tirupati",
      venture: "",
      rating: 5,
      body: "None",
      key: "37"
    },
    {
      title: "Tara Mahboub",
      venture: "One Breath London",
      rating: 5,
      body: "None",
      key: "38"
    },
    {
      title: "Tereza Pigova",
      venture: "1001 Stories",
      rating: 5,
      body: "None",
      key: "39"
    },
    {
      title: "Tobia Charles",
      venture: "",
      rating: 5,
      body: "None",
      key: "40"
    },
    {
      title: "Victoria Collins",
      venture: "LingUpp",
      rating: 5,
      body: "None",
      key: "41"
    },
    {
      title: "Yasmine Manshadi",
      venture: "Persian Supermarket",
      rating: 5,
      body: "None",
      key: "42"
    },
    {
      title: "Zac Feighery",
      venture: "YouDrive",
      rating: 5,
      body: "None",
      key: "43"
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
