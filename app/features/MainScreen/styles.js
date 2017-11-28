import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: 'rgba(52, 52, 52, 0.9)',
  },
  modalHeader: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 40,
  },
  modalCloseButton: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  modalItemsContainer: {
    marginRight: 50,
  },
});

export default styles;
