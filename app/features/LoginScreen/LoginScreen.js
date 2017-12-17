import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as allActionCreators from './actions';

import LoginForm from './components';
import styles from './styles';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.loginFormContainer}>
        <LoginForm
          authRequest={this.props.authRequest}
        />
      </View>
    );
  }
}

LoginScreen.propTypes = {
  authRequest: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(allActionCreators, dispatch),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
