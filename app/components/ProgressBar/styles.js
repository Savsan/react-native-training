import { StyleSheet } from 'react-native';
import { colors, fonts } from 'typography';

const styles = StyleSheet.create({
  progressBarTitle: {
    fontSize: 16,
    fontFamily: fonts.SOURCE_SANS_PRO_BOLD,
    color: colors.MEDIUM_GRAY,
  },
  progressBar: {
    position: 'relative',
    height: 10,
    backgroundColor: colors.GRAPHITE,
    borderRadius: 3,
  },
  progressScale: {
    height: 10,
    backgroundColor: colors.RASPBERRY,
    borderRadius: 3,
  },
  progressScaleBleed: {
    position: 'absolute',
    right: -14,
    top: 0,
    width: 20,
    height: 20,
    backgroundColor: colors.GRAPHITE,
    transform: [{ rotate: '45deg' }],
  },
});

export default styles;
