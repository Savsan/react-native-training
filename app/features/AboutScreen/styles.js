import { StyleSheet } from 'react-native';
import { colors, fonts } from 'typography';

const styles = StyleSheet.create({
  logoContainer: {
    width: 170,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  logoTitle: {
    fontFamily: fonts.OSWALD_BOLD,
    fontSize: 20,
    textAlign: 'center',
    color: colors.WHITE,
  },
  logoBraces: {
    marginTop: 7,
    width: 9,
    height: 16,
  },
});
