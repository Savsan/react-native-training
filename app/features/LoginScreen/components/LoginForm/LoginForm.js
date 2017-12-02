import React from 'react';
import { View, Text, TextInput, TouchableHighlight, Image } from 'react-native';
import PropTypes from 'prop-types';

import { Logo } from '../../../../components';
import { colors } from '../../../../config';
import styles from './styles';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  onInputChange = key => (value) => {
    this.setState({ [key]: value });
  }

  onPressLogin = () => {
    const credentials = this.state;
    this.props.initRequest(credentials);
  }

  render() {
    return (
      <View style={styles.loginForm}>
        <Logo {...styles} />
        <View style={styles.loginTextInputContainer}>
          <TextInput
            style={styles.loginTextInput}
            placeholder="Username"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            onChangeText={this.onInputChange('username')}
            value={this.state.username}
          />
          <TextInput
            style={styles.loginTextInput}
            placeholder="Password"
            autoCorrect={false}
            secureTextEntry
            underlineColorAndroid="transparent"
            onChangeText={this.onInputChange('password')}
            value={this.state.password}
          />
        </View>
        <TouchableHighlight
          style={styles.loginButton}
          onPress={this.onPressLogin}
          underlayColor={colors.DARK_GREEN}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

LoginForm.propTypes = {
  initRequest: PropTypes.func.isRequired,
};
