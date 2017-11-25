import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import mapActionsToProps from '../config/actions';
import styles from './styles';

import LoginScreen from '../screens/loginScreen';
import AboutScreen from '../screens/aboutScreen';
import ActionsScreen from '../screens/actionsScreen';
import MainScreen from '../screens/mainScreen';

class RootComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 'login',
    };
  }

  componentDidMount() {
    this.props.initRequest();
  }

  render() {
    if (this.state.currentScreen === 'login') {
      return (
        <View style={styles.container}>
          <LoginScreen />
        </View>
      );
    }
  }
}

RootComponent.propTypes = {
  initRequest: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    init: state.init,
  };
}

RootComponent = connect(mapStateToProps, mapActionsToProps)(RootComponent);

export default RootComponent;
