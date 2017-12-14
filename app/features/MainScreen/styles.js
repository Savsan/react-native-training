import { StyleSheet } from 'react-native';
import { colors } from 'typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    flex: 1.7,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBarContainer: {
    flex: 1.3,
    alignSelf: 'stretch',
    paddingHorizontal: 20,
  },
});

export default styles;
