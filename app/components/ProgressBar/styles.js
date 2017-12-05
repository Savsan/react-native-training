import { StyleSheet } from 'react-native';
import { colors } from 'typography';

const styles = StyleSheet.create({
  progressBarTitle: {
    fontSize: 16,
    fontFamily: 'source-sans-pro-bold',
    color: colors.MEDIUM_GRAY,
  },
  progressBar: {
    height: 10,
    backgroundColor: colors.GRAPHITE,
    borderRadius: 3,
  },
  progressScale: {
    height: 10,
    backgroundColor: colors.RASPBERRY,
  },
});

export default styles;
