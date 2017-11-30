import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Logo from '../Logo';
import styles from './styles';

export default class Header extends React.Component {
  render() {
    const {
      onLeftIconPress, onRightIconPress,
      leftIconName, rightIconName,
      leftIconVisibility, rightIconVisibility, title,
    } = this.props;

    return (
      <View style={styles.headerContainer}>
        <View style={{ width: 32, height: 32, marginLeft: 15 }}>
          {leftIconVisibility &&
            <Ionicons
              name={leftIconName}
              size={32}
              color="#FFFFFF"
              onPress={onLeftIconPress}
            />
          }
        </View>
        <Logo {...styles} titleText={title} />
        <View style={{ width: 32, height: 32, marginRight: 15 }}>
          {rightIconVisibility &&
            <Ionicons
              name={rightIconName}
              size={32}
              color="#FFFFFF"
              onPress={onRightIconPress}
            />
          }
        </View>
      </View>
    );
  }
}
