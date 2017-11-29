import React from 'react';
import { View, Text, TextInput, TouchableHighlight, Image } from 'react-native';
import PropTypes from 'prop-types';

import Logo from '../../../components';

import styles from './styles';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.onChangeLoginInput = this.onChangeLoginInput.bind(this);
    this.onChangePasswordInput = this.onChangePasswordInput.bind(this);
    this.onPressLogin = this.onPressLogin.bind(this);
  }

  onChangeLoginInput(value) {
    this.setState({
      username: value,
    });
  }

  onChangePasswordInput(value) {
    this.setState({
      password: value,
    });
  }

  onPressLogin() {
    this.props.initRequest();
  }

  render() {
    return (
      <View style={styles.loginForm}>
        <Logo {...styles} />
        <View style={styles.loginTextInputContainer}>
          <TextInput
            style={styles.loginTextInput}
            placeholder="Username"
            underlineColorAndroid="transparent"
            onChangeText={username => this.setState({ username })}
            value={this.state.username}
          />
          <TextInput
            style={styles.loginTextInput}
            placeholder="Password"
            secureTextEntry
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </View>
        <View style={styles.loginButtonContainer}>
          <TouchableHighlight
            onPress={this.onPressLogin}
            underlayColor="#7F993A"
          >
            <View style={styles.loginButton}>
              <Text style={styles.loginButtonText}>LOGIN</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

LoginForm.propTypes = {
  initRequest: PropTypes.func.isRequired,
};
