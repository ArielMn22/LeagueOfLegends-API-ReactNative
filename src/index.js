import { createBottomTabNavigator } from "react-navigation-tabs";
import Campeoes from './pages/Campeoes';
import Developer from './pages/Developer';
import { createAppContainer } from "react-navigation";

const TabNavigator = createBottomTabNavigator(
    {
        Campeoes,
        Developer
    },
    {
        tabBarOptions: {
            showLabel: false,
            inactiveBackgroundColor: "#262626",
            activeBackgroundColor: "#171717"
        }
    }
);

export default createAppContainer(TabNavigator);