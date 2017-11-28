import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View>
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
