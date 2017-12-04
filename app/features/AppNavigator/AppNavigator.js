import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import MainScreen from 'features/MainScreen/MainScreen';
import AboutScreen from 'features/AboutScreen/AboutScreen';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Logo } from 'reusable-components';
import HeaderLeft from './components';
import styles from './styles';

const AppNavigator = StackNavigator(
  {
    Main: { screen: MainScreen },
    About: { screen: AboutScreen },
  },
  {
    headerMode: 'screen',
    navigationOptions: ({ navigation, screenProps }) => {
      const openModal = screenProps.mainScreen.openMainScreenModal;
      const mainRouteName = 'Main';
      const { routeName } = navigation.state;
      const title = mainRouteName === routeName ? 'epamer' : routeName;

      return ({
        headerStyle: styles.headerStyle,
        headerTitle: <Logo
          {...styles}
          titleText={title}
        />,
        headerRight: <Ionicons
          name="md-person"
          size={28}
          color="#FFFFFF"
          onPress={openModal}
        />,
        headerLeft: <HeaderLeft
          navigation={navigation}
          mainRouteName={mainRouteName}
        />,
      });
    },
  },
);

HeaderLeft.propTypes = {
  mainRouteName: PropTypes.string.isRequired,
};

export default AppNavigator;
