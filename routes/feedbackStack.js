import { createStackNavigator } from "react-navigation-stack";
import Feedback from "../screens/feedback";
import TeacherDetails from "../screens/teacherDetails";
import Header from "../shared/header";
import React from "react";

const screens = {
  Feedback: {
    screen: Feedback,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Feedback" />,
        headerTitleContainerStyle: {
          left: 0,
          right: 0
        }
      };
    }
  },
  TeacherDetails: {
    screen: TeacherDetails,
    navigationOptions: {
      title: "Teacher Profile"
    }
  }
};

const FeedbackStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#f5633b", // Founder Tribe orange
      height: 150
    }
  }
});

export default FeedbackStack;
