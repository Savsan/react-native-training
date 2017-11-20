import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableHighlight, Image } from 'react-native';

export default class LoginFormComponent extends React.Component {
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
    console.log('Dispatch Login Action');
  }

  render() {
    return (
      <View style={styles.loginForm}>
        <View style={styles.loginFormLogoContainer}>
          <Image
            source={require('../../../assets/images/left-braces.png')}
            style={styles.logoLeftBraces}
          />
          <Text
            style={styles.loginTitle}
            includeFontPadding={false}
          >
          epamer
          </Text>
          <Image
            source={require('../../../assets/images/right-braces.png')}
            style={styles.logoRightBraces}
          />
        </View>
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

const styles = StyleSheet.create({
  loginForm: {
    width: 300,
    height: 400,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  loginFormLogoContainer: {
    width: 300,
  },
  loginTitle: {
    fontFamily: 'oswald-bold',
    fontSize: 70,
    textAlign: 'center',
  },
  loginTextInputContainer: {
    width: 300,
    height: 120,
    justifyContent: 'space-between',
  },
  logoLeftBraces: {
    position: 'absolute',
    width: 26,
    height: 45,
    left: 0,
    top: 37,
  },
  logoRightBraces: {
    position: 'absolute',
    width: 26,
    height: 45,
    right: 0,
    top: 37,
  },
  loginTextInput: {
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: '#979797',
    fontSize: 16,
    color: '#464547',
  },
  loginButtonContainer: {
    width: 300,
    backgroundColor: '#A3C644',
  },
  loginButton: {
    paddingVertical: 15,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 27,
    textAlign: 'center',
  },
});
