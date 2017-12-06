import { StyleSheet } from 'react-native';
import { colors, fonts } from 'typography';

const styles = StyleSheet.create({
  actionsButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderRadius: 50,
    borderColor: colors.LIGHT_GRAY,
  },
  actionsButtonSubtitle: {
    fontFamily: fonts.SOURCE_SANS_PRO_REGULAR,
    fontSize: 17,
    textAlign: 'center',
    color: colors.WHITE,
    marginTop: 15,
    marginBottom: 40,
  },
});

export default styles;
