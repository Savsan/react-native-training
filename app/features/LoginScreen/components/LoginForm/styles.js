import { StyleSheet } from 'react-native';
import { colors, fonts } from 'typography';

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
    height: 120,
    justifyContent: 'space-between',
  },
  loginTextInput: {
    fontFamily: fonts.SOURCE_SANS_PRO_REGULAR,
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
    fontFamily: fonts.SOURCE_SANS_PRO_BOLD,
    color: colors.WHITE,
    fontSize: 27,
    textAlign: 'center',
  },
});

export default styles;
