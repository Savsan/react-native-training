import React from 'react';
import { StyleSheet, View } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActionCreators from './actions';
import PropTypes from 'prop-types';

import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from 'navigation';

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
      <LoginScreen
        initRequest={this.props.initRequest}
      />
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

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(allActionCreators, dispatch),
  dispatch,
});

RootComponent = connect(mapStateToProps, mapDispatchToProps)(RootComponent);

export default RootComponent;
