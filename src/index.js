import { createBottomTabNavigator } from "react-navigation-tabs";
import Campeoes from './pages/Campeoes';
import Developer from './pages/Developer';
import { createAppContainer } from "react-navigation";

const TabNavigator = createBottomTabNavigator(
    {
        Campeoes,
        Developer
    }
);

export default createAppContainer(TabNavigator);