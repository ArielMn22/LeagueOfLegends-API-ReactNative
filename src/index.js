import {
  createBottomTabNavigator
} from "react-navigation";
import Campeoes from './pages/Campeoes/Campeoes';

const MainNav = createBottomTabNavigator(
  {
    Campeoes: {
      screen: Campeoes
    }
  },
  {
    initialRouteName: "Campeoes",
    swipeEnabled: true,
    tabBarOptions: {
      showLabel: false,
      inactiveBackgroundColor: "#B2DBF1",
      activeBackgroundColor: "#83bedf",
      activeTintColor: "#81DF99",
      inactiveTintColor: "#000000",
      style: {
        height: 50,
        borderTopWidth: 0
      }
    }
  }
);