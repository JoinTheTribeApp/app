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
      linkedin: "https://www.linkedin.com/in/alicia-norton-882193a4/",
      venture: "Treacle Health",
      website: "http://www.treaclehealth.com/",
      rating: 4,
      body: "None",
      key: "3"
    },
    {
      title: "Ariel Kendall",
      linkedin: "https://www.linkedin.com/in/ariel-kendall-5b271078/",
      venture: "Woke Comics",
      website: "",
      rating: 4,
      body: "None",
      key: "4"
    },
    {
      title: "Ash Staines",
      linkedin: "https://www.linkedin.com/in/ashley-staines-13a92b40/",
      venture: "DoubleTapp",
      website: "https://www.double-tapp.co.uk/",
      rating: 4,
      body: "None",
      key: "5"
    },
    {
      title: "Ben Curtis",
      linkedin: "https://www.linkedin.com/in/curtisben/",
      venture: "Aviation Experience Days",
      website: "",
      rating: 4,
      body: "None",
      key: "6"
    },
    {
      title: "Claud Williams",
      linkedin: "https://www.linkedin.com/in/claudw/",
      venture: "Dream Nation",
      website: "https://dreamnation.co/",
      rating: 4,
      body: "None",
      key: "7"
    },
    {
      title: "Claudine Adeyemi",
      linkedin: "https://www.linkedin.com/in/claudineadeyemi/",
      venture: "Career Ear",
      website: "https://www.careerear.co.uk/",
      rating: 4,
      body: "None",
      key: "8"
    },
    {
      title: "Fleur Colvile",
      linkedin: "https://www.linkedin.com/in/fleur-colvile-099720a6/",
      venture: "Mix & Rise",
      website: "https://www.mixandrise.com/",
      rating: 4,
      body: "None",
      key: "9"
    },
    {
      title: "Guy Wilkinson",
      linkedin: "https://www.linkedin.com/in/guy-wilkinson-0997aa43/",
      venture: "Carbon Emissions Reduction",
      website: "",
      rating: 4,
      body: "None",
      key: "10"
    },
    {
      title: "Hasan Sukkar",
      linkedin: "https://www.linkedin.com/in/hasansukkar/",
      venture: "Dogger",
      website: "",
      rating: 4,
      body: "None",
      key: "11"
    },
    {
      title: "Hugo Besley",
      linkedin: "https://www.linkedin.com/in/hugobesley/",
      venture: "Studio Systems",
      website: "https://www.makerwing.com/studiosystems",
      rating: 4,
      body: "None",
      key: "12"
    },
    {
      title: "Ina Bierylo",
      linkedin: "https://www.linkedin.com/in/ina-bierylo-413273145/",
      venture: "",
      website: "",
      rating: 4,
      body: "None",
      key: "13"
    },
    {
      title: "Ish Wijewardana",
      linkedin: "https://www.linkedin.com/in/ishanwijewardana/",
      venture: "Strivy",
      website: "https://www.strivy.co.uk/",
      rating: 4,
      body: "None",
      key: "14"
    },
    {
      title: "James Nightingall",
      linkedin: "https://www.linkedin.com/in/james-nightingall-1a1bb89/",
      venture: "HomeFinder",
      website: "https://www.homefinder.ai/",
      rating: 4,
      body: "None",
      key: "15"
    },
    {
      title: "James Stirrat",
      linkedin: "",
      venture: "CircleOS",
      website: "http://circle-os.com/",
      rating: 4,
      body: "None",
      key: "16"
    },
    {
      title: "Jaron Soh",
      linkedin: "https://www.linkedin.com/in/jaronsoh",
      venture: "Traktion",
      website: "https://www.traktion.ai/",
      rating: 4,
      body: "None",
      key: "17"
    },
    {
      title: "Joel Gujral",
      linkedin: "https://www.linkedin.com/in/joel-gujral-7824ab90",
      venture: "MyndUP",
      website: "https://www.myndup.com/",
      rating: 4,
      body: "None",
      key: "18"
    },
    {
      title: "Karen Meynard",
      linkedin: "https://www.linkedin.com/in/karen-meynard-914615113",
      venture: "ACT!VATE",
      website: "",
      rating: 4,
      body: "None",
      key: "19"
    },
    {
      title: "Kat Merkalenko",
      linkedin: "https://www.linkedin.com/in/katerynam/",
      venture: "Gifter",
      website: "https://www.gifter.tech/",
      rating: 4,
      body: "None",
      key: "20"
    },
    {
      title: "Kate Nightingale",
      linkedin: "https://www.linkedin.com/in/katenightingale/",
      venture: "Pips",
      website: "https://www.eatpips.com/",
      rating: 4,
      body: "None",
      key: "21"
    },
    {
      title: "Kiran Kotecha",
      linkedin: "https://www.linkedin.com/in/kiran-kotecha/",
      venture: "LOKAL",
      website: "https://www.instagram.com/lokalapp/",
      rating: 4,
      body: "None",
      key: "22"
    },
    {
      title: "Lucia Banjo",
      linkedin: "https://www.linkedin.com/in/luciabanjo/",
      venture: "Embrace",
      website: "https://www.embracekeratin.com/",
      rating: 4,
      body: "None",
      key: "23"
    },
    {
      title: "Luke Billings",
      linkedin: "https://www.linkedin.com/in/lukebillings/",
      venture: "Kanbanchi Job Tracker",
      website: "",
      rating: 4,
      body: "None",
      key: "24"
    },
    {
      title: "Matthew Holding",
      linkedin: "https://www.linkedin.com/in/matthewkangholding/",
      venture: "",
      website: "",
      rating: 4,
      body: "None",
      key: "25"
    },
    {
      title: "Max Hampshire",
      linkedin: "https://www.linkedin.com/in/max-hampshire-engineer/",
      venture: "",
      website: "",
      rating: 4,
      body: "None",
      key: "26"
    },
    {
      title: "Maxxwell Firth",
      linkedin: "https://www.linkedin.com/in/maxxwell",
      venture: "Founder Tribe",
      website: "https://foundertribe.org/",
      rating: 5,
      body: "None",
      key: "27"
    },
    {
      title: "Melissa Yacoub",
      linkedin: "https://www.linkedin.com/in/melissayacoub/",
      venture: "Discover Consultancy",
      website: "https://discoverconsultancy.com/",
      rating: 5,
      body: "None",
      key: "28"
    },
    {
      title: "Natasha Eeles",
      linkedin: "https://www.linkedin.com/in/natasha-eeles/",
      venture: "Bold Voices",
      website: "https://www.boldvoices.co.uk/",
      rating: 5,
      body: "None",
      key: "29"
    },
    {
      title: "Nathalie Stark",
      linkedin: "https://www.linkedin.com/in/nathalie-stark-90aa03107/",
      venture: "",
      website: "",
      rating: 5,
      body: "None",
      key: "30"
    },
    {
      title: "Nish Modasia",
      linkedin: "https://www.linkedin.com/in/nish-modasia-288b07105/",
      venture: "EN ROOT",
      website: "https://www.enrootldn.co.uk/",
      rating: 5,
      body: "None",
      key: "31"
    },
    {
      title: "Patrick Dobinson",
      linkedin: "https://www.linkedin.com/in/patrick-dobinson-382491103/",
      venture: "Botrade",
      website: "https://bobtrade.com/",
      rating: 5,
      body: "None",
      key: "32"
    },
    {
      title: "Pavel Kroupa",
      linkedin: "https://www.linkedin.com/in/kroupavel/",
      venture: "Carbon Accounting System",
      website: "",
      rating: 5,
      body: "None",
      key: "33"
    },
    {
      title: "Phoebe Jones",
      linkedin: "https://www.linkedin.com/in/phoebe-jones",
      venture: "RecoverMe",
      website: "",
      rating: 5,
      body: "None",
      key: "34"
    },
    {
      title: "Suraj Tirupati",
      linkedin: "https://www.linkedin.com/in/suraj-tirupati-4a9630155/",
      venture: "",
      website: "",
      rating: 5,
      body: "None",
      key: "35"
    },
    {
      title: "Tara Mahboub",
      linkedin: "https://www.linkedin.com/in/tara-mahboub-857403125/",
      venture: "One Breath London",
      website: "https://www.onebreathlondon.co.uk/",
      rating: 5,
      body: "None",
      key: "36"
    },
    {
      title: "Tobia Charles",
      linkedin: "https://www.linkedin.com/in/tobia-charles-623178112/",
      venture: "",
      website: "",
      rating: 5,
      body: "None",
      key: "37"
    },
    {
      title: "Victoria Collins",
      linkedin:
        "https://www.linkedin.com/in/collinsvictoria/https://www.linkedin.com/in/collinsvictoria/",
      venture: "LingUpp",
      website: "https://www.lingupp.com/",
      rating: 5,
      body: "None",
      key: "38"
    },
    {
      title: "Yasmine Manshadi",
      linkedin: "https://www.linkedin.com/in/yasminemanshadi/",
      venture: "Persian Supermarket",
      website: "https://persiansupermarket.tk/",
      rating: 5,
      body: "None",
      key: "39"
    },
    {
      title: "Zac Feighery",
      linkedin: "https://www.linkedin.com/in/zacfeighery/",
      venture: "YouDrive",
      website: "",
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
