import { StyleSheet, Dimensions } from 'react-native';
import { colors } from 'typography';

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 25,
    backgroundColor: 'rgba(52, 52, 52, 0.98)',
  },
  modalCloseButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  modalHeader: {
    flex: 1,
    alignItems: 'center',
  },
  modalSubtitle: {
    fontFamily: 'oswald-bold',
    color: colors.SHARP_BLUE,
  },
  modalActionsContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  modalCloseButton: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  logoTitle: {
    fontFamily: 'oswald-bold',
    fontSize: 24,
    textAlign: 'center',
    color: colors.WHITE,
    marginLeft: 5,
    marginRight: 5,
  },
  logoBraces: {
    marginTop: 13,
    width: 10,
    height: 16,
  },
});

export default styles;
