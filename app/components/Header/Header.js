import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Logo from '../Logo';
import styles from './styles';

export default class Header extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <View style={styles.headerContainer}>
        <Logo {...styles} titleText={title} />
      </View>
    );
  }
}
