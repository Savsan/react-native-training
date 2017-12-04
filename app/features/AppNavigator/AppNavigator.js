import { StackNavigator } from 'react-navigation';
import MainScreen from 'features/MainScreen/MainScreen';
import AboutScreen from 'features/AboutScreen/AboutScreen';
import React from 'react';
import { Header } from 'reusable-components';
import { Ionicons } from '@expo/vector-icons';

const AppNavigator = StackNavigator(
  {
    Main: { screen: MainScreen },
    About: { screen: AboutScreen },
  },
  {
    headerMode: 'screen',
    navigationOptions: ({ navigation, screenProps }) => {
      const openModal = screenProps.mainScreen.openMainScreenModal;

      return ({
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTitle: <Header
          title="epamer"
        />,
        headerRight: <Ionicons
          name="md-person"
          size={32}
          color="#FFFFFF"
          onPress={openModal}
        />,
      });
    },
  },
);

export default AppNavigator;
