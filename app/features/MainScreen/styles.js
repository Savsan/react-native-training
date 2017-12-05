import { StyleSheet } from 'react-native';
import { colors } from 'typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    flex: 2,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBarContainer: {
    flex: 1,
    alignSelf: 'stretch',
    paddingTop: 8,
    paddingHorizontal: 20,
    paddingBottom: 35,
    justifyContent: 'space-between',
  },
});

export default styles;
