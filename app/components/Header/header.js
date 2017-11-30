import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Logo from '../Logo';
import styles from './styles';

export default class Header extends React.Component {
  render() {
    const {
      onLeftHeaderPress, onRightHeaderPress,
      isLeftHeaderVisible, isRightHeaderVisible, title,
    } = this.props;

    return (
      <View style={styles.headerContainer}>
        <View style={{ width: 32, height: 32, marginLeft: 15 }}>
          {isLeftHeaderVisible &&
            <Ionicons
              name="ios-arrow-round-back"
              size={32}
              color="#FFFFFF"
              onPress={onLeftHeaderPress}
            />
          }
        </View>
        <Logo {...styles} titleText={title} />
        <View style={{ width: 32, height: 32, marginRight: 15 }}>
          {isRightHeaderVisible &&
            <Ionicons
              name="md-person"
              size={32}
              color="#FFFFFF"
              onPress={onRightHeaderPress}
            />
          }
        </View>
      </View>
    );
  }
}
