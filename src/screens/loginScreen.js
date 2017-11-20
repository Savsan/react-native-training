import React from 'react';
import { View } from 'react-native';

import LoginFormComponent from '../components/login/loginFormComponent';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View>
        <LoginFormComponent />
      </View>
    );
  }
}
