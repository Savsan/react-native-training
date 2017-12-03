import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import styles from './styles';

export default class ActionsButton extends React.Component {
  render() {
    const {
      size, iconName, subtitle, color, actionButton, onPress,
    } = this.props;
    const iconSize = size * 0.6;

    return (
      <View style={{ width: size }}>
        <View style={{ width: size, height: size, position: 'relative' }}>
          <TouchableOpacity
            style={styles.actionsButton}
            onPress={onPress}
          >
            <Ionicons
              name={iconName}
              size={iconSize}
              color={color}
            />
          </TouchableOpacity>
        </View>
        {this.props.subtitle &&
        <Text style={styles.actionsButtonSubtitle}>{subtitle}</Text>
        }
      </View>
    );
  }
}
