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
      linkedin: "https://www.linkedin.com/in/abi-owolabi-74a91b8a/",
      venture: "Blacwxlf",
      website: "https://www.blacwxlf.com/",
      rating: 1,
      body: "None",
      key: "1"
    },
    {
      title: "Alex McKeeman",
      linkedin: "https://www.linkedin.com/in/alexander-mckeeman-b0435588/",
      venture: "Filt",
      website: "",
      rating: 1,
      body: "None",
      key: "2"
    },
    {
      title: "Alicia Norton",
      linkedin: "",
      venture: "Treacle Health",
      rating: 4,
      body: "None",
      key: "3"
    },
    {
      title: "Ariel Kendall",
      linkedin: "",
      venture: "Woke Comics",
      rating: 4,
      body: "None",
      key: "4"
    },
    {
      title: "Ash Staines",
      linkedin: "",
      venture: "DoubleTapp",
      rating: 4,
      body: "None",
      key: "5"
    },
    {
      title: "Ben Curtis",
      linkedin: "",
      venture: "Aviation Experience Days",
      rating: 4,
      body: "None",
      key: "6"
    },
    {
      title: "Claud Williams",
      linkedin: "",
      venture: "Dream Nation",
      rating: 4,
      body: "None",
      key: "7"
    },
    {
      title: "Claudine Adeyemi",
      linkedin: "",
      venture: "Career Ear",
      rating: 4,
      body: "None",
      key: "8"
    },
    {
      title: "Fleur Colvile",
      linkedin: "",
      venture: "Mix & Rise",
      rating: 4,
      body: "None",
      key: "9"
    },
    {
      title: "Guy Wilkinson",
      linkedin: "",
      venture: "Carbon Emissions Reduction",
      rating: 4,
      body: "None",
      key: "10"
    },
    {
      title: "Hasan Sukkar",
      linkedin: "",
      venture: "Dogger",
      rating: 4,
      body: "None",
      key: "11"
    },
    {
      title: "Hugo Besley",
      linkedin: "",
      venture: "Studio Systems",
      rating: 4,
      body: "None",
      key: "12"
    },
    {
      title: "Ina Bierylo",
      linkedin: "",
      venture: "",
      rating: 4,
      body: "None",
      key: "13"
    },
    {
      title: "Ish Wijewardana",
      linkedin: "",
      venture: "Strivy",
      rating: 4,
      body: "None",
      key: "14"
    },
    {
      title: "James Nightingall",
      linkedin: "",
      venture: "HomeFinder",
      rating: 4,
      body: "None",
      key: "15"
    },
    {
      title: "James Stirrat",
      linkedin: "",
      venture: "CircleOS",
      rating: 4,
      body: "None",
      key: "16"
    },
    {
      title: "Jaron Soh",
      linkedin: "",
      venture: "Traktion",
      rating: 4,
      body: "None",
      key: "17"
    },
    {
      title: "Joel Gujral",
      linkedin: "",
      venture: "Firedrop",
      rating: 4,
      body: "None",
      key: "18"
    },
    {
      title: "Karen Meynard",
      linkedin: "",
      venture: "ACT!VATE",
      rating: 4,
      body: "None",
      key: "19"
    },
    {
      title: "Kat Merkalenko",
      linkedin: "",
      venture: "Gifter",
      rating: 4,
      body: "None",
      key: "20"
    },
    {
      title: "Kate Nightingale",
      linkedin: "",
      venture: "Pips",
      rating: 4,
      body: "None",
      key: "21"
    },
    {
      title: "Kiran Kotecha",
      linkedin: "",
      venture: "LOKAL",
      rating: 4,
      body: "None",
      key: "22"
    },
    {
      title: "Lucia Banjo",
      linkedin: "",
      venture: "Embrace",
      rating: 4,
      body: "None",
      key: "23"
    },
    {
      title: "Luke Billings",
      linkedin: "",
      venture: "Kanbanchi Job Tracker",
      rating: 4,
      body: "None",
      key: "24"
    },
    {
      title: "Matthew Holding",
      linkedin: "",
      venture: "",
      rating: 4,
      body: "None",
      key: "25"
    },
    {
      title: "Max Hampshire",
      linkedin: "",
      venture: "",
      rating: 4,
      body: "None",
      key: "26"
    },
    {
      title: "Maxxwell Firth",
      linkedin: "",
      venture: "Founder Tribe",
      rating: 5,
      body: "None",
      key: "27"
    },
    {
      title: "Melissa Yacoub",
      linkedin: "",
      venture: "Discover Consultancy",
      rating: 5,
      body: "None",
      key: "28"
    },
    {
      title: "Natasha Eeles",
      linkedin: "",
      venture: "Bold Voices",
      rating: 5,
      body: "None",
      key: "29"
    },
    {
      title: "Nathalie Stark",
      linkedin: "",
      venture: "",
      rating: 5,
      body: "None",
      key: "30"
    },
    {
      title: "Nish Modasia",
      linkedin: "",
      venture: "EN ROOT",
      rating: 5,
      body: "None",
      key: "31"
    },
    {
      title: "Patrick Dobinson",
      linkedin: "",
      venture: "",
      rating: 5,
      body: "None",
      key: "32"
    },
    {
      title: "Pavel Kroupa",
      linkedin: "",
      venture: "Carbon Accounting System",
      rating: 5,
      body: "None",
      key: "33"
    },
    {
      title: "Phoebe Jones",
      linkedin: "",
      venture: "RecoverMe",
      rating: 5,
      body: "None",
      key: "34"
    },
    {
      title: "Suraj Tirupati",
      linkedin: "",
      venture: "",
      rating: 5,
      body: "None",
      key: "35"
    },
    {
      title: "Tara Mahboub",
      linkedin: "",
      venture: "One Breath London",
      rating: 5,
      body: "None",
      key: "36"
    },
    {
      title: "Tobia Charles",
      linkedin: "",
      venture: "",
      rating: 5,
      body: "None",
      key: "37"
    },
    {
      title: "Victoria Collins",
      linkedin: "",
      venture: "LingUpp",
      rating: 5,
      body: "None",
      key: "38"
    },
    {
      title: "Yasmine Manshadi",
      linkedin: "",
      venture: "Persian Supermarket",
      rating: 5,
      body: "None",
      key: "39"
    },
    {
      title: "Zac Feighery",
      linkedin: "",
      venture: "YouDrive",
      rating: 5,
      body: "None",
      key: "40"
    }
    // {
    //   title: "Adil Dewan",
    //   venture: "Nuts of Argania",
    //   rating: 1,
    //   body: "None",
    //   key: "41"
    // },
    // {
    //   title: "Sam Ducker",
    //   venture: "Anyone",
    //   rating: 5,
    //   body: "None",
    //   key: "42"
    // },
    // {
    //   title: "Tereza Pigova",
    //   venture: "1001 Stories",
    //   rating: 5,
    //   body: "None",
    //   key: "43"
    // }
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
      {/* <Modal visible={modelOpen} animationType="slide">
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
      /> */}

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("TodoDetails", item)}
          >
            <Card style={styles.foundercards}>
              <Image style={styles.avatars} source={images.avatars[item.key]} />
              {/* <Image style={styles.avatars} source={{ uri: item.qrcode }} /> */}
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
