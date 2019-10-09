/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Campeoes from './src/pages/Campeoes';
import Navigator from './src';

AppRegistry.registerComponent(appName, () => Navigator);
