import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import PropTypes from 'prop-types';
import mapActionsToProps from '../config/actions';
import AppNavigator from '../config/appNavigator';
import styles from './styles';

import LoginScreen from './LoginScreen';

class RootComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthorised: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;

    if (currentProps.auth.isAuthorised !== nextProps.auth.isAuthorised) {
      this.state.isAuthorised = nextProps.auth.isAuthorised;
    }
  }

  render() {
    if (this.props.auth.isAuthorised) {
      return (
        <AppNavigator
          navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
          })}
          screenProps={{
            mainScreen: {
              openMainScreenModal: this.props.openMainScreenModal,
            },
          }}
        />
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
  dispatch: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  nav: PropTypes.object.isRequired,
  initRequest: PropTypes.func.isRequired,
  openMainScreenModal: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    nav: state.nav,
  };
}

RootComponent = connect(mapStateToProps, mapActionsToProps)(RootComponent);

export default RootComponent;
