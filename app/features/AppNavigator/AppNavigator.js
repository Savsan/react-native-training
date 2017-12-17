import React from 'react';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import MainScreen from 'features/MainScreen/MainScreen';
import AboutScreen from 'features/AboutScreen/AboutScreen';
import HeaderLeft from './components';
import { Logo } from 'reusable-components';
import { colors } from 'typography';
import styles from './styles';

const AppNavigator = StackNavigator(
  {
    Main: { screen: MainScreen },
    About: { screen: AboutScreen },
  },
  {
    headerMode: 'screen',
    navigationOptions: ({ navigation, screenProps }) => {
      const toggleModal = screenProps.mainScreen.toggleMainScreenModal;
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
          color={colors.WHITE}
          onPress={toggleModal}
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
