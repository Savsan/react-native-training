import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loginForm: {
    width: 300,
    height: 400,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logoContainer: {
    width: 300,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  logoTitle: {
    fontFamily: 'oswald-bold',
    fontSize: 70,
    textAlign: 'center',
  },
  logoBraces: {
    marginTop: 38,
    width: 26,
    height: 45,
  },
  loginTextInputContainer: {
    width: 300,
    height: 120,
    justifyContent: 'space-between',
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

export default styles;
