import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import LoginScreen from '../screens/loginScreen';
import AboutScreen from '../screens/aboutScreen';
import ActionsScreen from '../screens/actionsScreen';
import MainScreen from '../screens/mainScreen';

class RootComponent extends React.Component {
  this.state = {
    currentScreen: 'login',
  }

  componentDidMount() {
    this.props.initRequest();
  }

  render() {
    if(this.state.currentScreen === 'login')
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

function mapStateToProps(state) {
  return {
    init: state.init,
  };
}

function mapActionsToProps(dispatch) {
  return {
    initRequest: () => dispatch({
      type: 'INITIAL_REQUEST',
    }),
  };
}

RootComponent = connect(mapStateToProps, mapActionsToProps)(RootComponent);

export default RootComponent;
