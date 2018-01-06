import { StyleSheet } from 'react-native';
import { colors } from 'typography';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  snapShoot: {
    fontSize: 65,
    color: colors.RASPBERRY,
  },
  cameraStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  controlButtonsContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    width: '100%',
    height: 70,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
