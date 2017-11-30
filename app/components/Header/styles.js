import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 45,
  },
  logoContainer: {
    flexDirection: 'row',
  },
  logoTitle: {
    fontFamily: 'oswald-bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    marginLeft: 5,
    marginRight: 5,
  },
  logoBraces: {
    marginTop: 11,
    width: 7,
    height: 12,
  },
});

export default styles;
