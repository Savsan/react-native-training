import { StackNavigator } from 'react-navigation';
import MainScreen from 'features/MainScreen/MainScreen';
import AboutScreen from 'features/AboutScreen/AboutScreen';

const AppNavigator = StackNavigator({
  Main: { screen: MainScreen },
  About: { screen: AboutScreen },
});

export default AppNavigator;
