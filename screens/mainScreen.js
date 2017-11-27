import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

const testNavAction = NavigationActions.navigate({
  routeName: 'Actions',
  params: {},
  action: NavigationActions.navigate({ routeName: 'SubProfileRoute' }),
});

export default class MainScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Main screen',
    headerRight:
  <Button
    color="black"
    title="Button"
    onPress={() => {
      navigation.dispatch(testNavAction);
    }}
  />,
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>MainScreen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Actions')}
          title="Go to Actions"
        />
        <Button
          onPress={() => this.props.navigation.navigate('About')}
          title="Go to About"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
