import { StyleSheet } from 'react-native';
import { colors } from 'typography';

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  logoTitle: {
    fontFamily: 'oswald-bold',
    fontSize: 20,
    textAlign: 'center',
    color: colors.WHITE,
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
