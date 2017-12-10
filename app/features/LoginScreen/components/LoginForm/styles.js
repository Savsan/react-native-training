import { StyleSheet } from 'react-native';
import { colors, fonts } from 'typography';

const styles = StyleSheet.create({
  loginForm: {
    alignSelf: 'stretch',
    marginBottom: 35,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 35,
  },
  logoTitle: {
    fontFamily: fonts.OSWALD_BOLD,
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
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  loginTextInput: {
    fontFamily: fonts.SOURCE_SANS_PRO_BOLD,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.GRAY,
    fontSize: 20,
    color: colors.GRAPHITE,
    marginBottom: 35,
  },
  loginButton: {
    paddingVertical: 15,
    alignSelf: 'stretch',
    backgroundColor: colors.LIME_GREEN,
  },
  loginButtonText: {
    fontFamily: fonts.SOURCE_SANS_PRO_BOLD,
    color: colors.WHITE,
    fontSize: 27,
    textAlign: 'center',
  },
});

export default styles;
