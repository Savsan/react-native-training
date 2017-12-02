import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import LoginForm from './components';
import styles from './styles';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.loginFormContainer}>
        <LoginForm
          initRequest={this.props.initRequest}
        />
      </View>
    );
  }
}

LoginScreen.propTypes = {
  initRequest: PropTypes.func.isRequired,
};
