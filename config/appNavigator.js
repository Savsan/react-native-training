import { StackNavigator } from 'react-navigation';

import MainScreen from '../screens/mainScreen';
import AboutScreen from '../screens/aboutScreen';
import ActionsScreen from '../screens/actionsScreen';

const AppNavigator = StackNavigator({
  Main: { screen: MainScreen },
  Actions: { screen: ActionsScreen },
  About: { screen: AboutScreen },
});

export default AppNavigator;
