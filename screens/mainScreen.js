import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import AboutScreen from '../screens/aboutScreen';
import ActionsScreen from '../screens/actionsScreen';

class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Main screen',
  };

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

const AppNavigator = StackNavigator({
  Main: { screen: MainScreen },
  Actions: { screen: ActionsScreen },
  About: { screen: AboutScreen },
});

export default AppNavigator;
