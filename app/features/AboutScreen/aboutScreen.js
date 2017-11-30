import React from 'react';
import { View, Text } from 'react-native';

import Logo from '../../components';
import { Header } from '../../components';
import styles from './styles';

export default class AboutScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header
      title="about"
      isLeftHeaderVisible
      isRightHeaderVisible={false}
      onLeftHeaderPress={() => navigation.goBack()}
      onRightHeaderPress={false}
    />,
  });

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
