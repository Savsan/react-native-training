import React from 'react';
import { View, Text } from 'react-native';

import { Header } from 'reusable-components';
import styles from './styles';

export default class AboutScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header
      title="about"
      leftIconName="ios-arrow-round-back"
      leftIconVisibility
      onLeftIconPress={() => navigation.goBack()}
      rightIconVisibility={false}
      rightIconName=""
      onRightIconPress={false}
    />,
  });

  render() {
    return (
      <View>
        <Text>AboutScreen</Text>
      </View>
    );
  }
}
