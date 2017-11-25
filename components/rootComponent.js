import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import mapActionsToProps from '../config/actions';
import styles from './styles';

import MainScreen from '../screens/mainScreen';
import LoginScreen from '../screens/loginScreen';

class RootComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthorised: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.isAuthorised !== nextProps.auth.isAuthorised) {
      this.state.isAuthorised = nextProps.auth.isAuthorised;
    }
  }

  render() {
    if (this.state.isAuthorised) {
      return (
        <MainScreen />
      );
    }
    return (
      <View style={styles.container}>
        <LoginScreen
          initRequest={this.props.initRequest}
        />
      </View>
    );
  }
}

RootComponent.propTypes = {
  initRequest: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

RootComponent = connect(mapStateToProps, mapActionsToProps)(RootComponent);

export default RootComponent;
