import React from 'react';
import { View, Text } from 'react-native';

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
  };

  render() {
    return (
      <View>
        <Text>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </Text>
      </View>
    );
  }
}
