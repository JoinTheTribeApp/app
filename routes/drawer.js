import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import FeedbackStack from "./feedbackStack.js";

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack
  },
  About: {
    screen: AboutStack
  },
  Feedback: {
    screen: FeedbackStack
  }
});

export default createAppContainer(RootDrawerNavigator);
