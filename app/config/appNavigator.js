import { StackNavigator } from 'react-navigation';

import { MainScreen, AboutScreen } from '../features';

const AppNavigator = StackNavigator({
  Main: { screen: MainScreen },
  About: { screen: AboutScreen },
});

export default AppNavigator;
