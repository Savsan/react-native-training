import { StyleSheet } from 'react-native';
import colors from '../../../../config/typography/colors';

const styles = StyleSheet.create({
  loginForm: {
    alignSelf: 'stretch',
    height: 400,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logoContainer: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  logoTitle: {
    fontFamily: 'oswald-bold',
    fontSize: 70,
    textAlign: 'center',
    color: colors.GRAPHITE,
  },
  logoBraces: {
    marginTop: 38,
    width: 26,
    height: 45,
  },
  loginTextInputContainer: {
    alignSelf: 'stretch',
    height: 120,
    justifyContent: 'space-between',
  },
  loginTextInput: {
    fontFamily: 'source-sans-pro-regular',
    padding: 10,
    borderWidth: 1,
    borderColor: colors.GRAY,
    fontSize: 16,
    color: colors.GRAPHITE,
  },
  loginButton: {
    paddingVertical: 15,
    alignSelf: 'stretch',
    backgroundColor: colors.LIME_GREEN,
  },
  loginButtonText: {
    fontFamily: 'source-sans-pro-bold',
    color: colors.WHITE,
    fontSize: 27,
    textAlign: 'center',
  },
});

export default styles;
