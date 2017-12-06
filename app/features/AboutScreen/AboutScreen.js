import React from 'react';
import { View, Text } from 'react-native';

import { Header } from 'reusable-components';
import styles from './styles';

export default class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.aboutScreenContainer}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas</Text>
      </View>
    );
  }
}
