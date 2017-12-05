import React from 'react';
import { View, Text } from 'react-native';

import { colors } from 'typography';
import styles from './styles';

export default class ProgressBar extends React.Component {
  render() {
    const { title, percent } = this.props;
    return (
      <View style={styles.progressBarContainer}>
        <Text style={styles.progressBarTitle}>{title}</Text>
        <View style={styles.progressBar}>
          <View
            style={{
              width: percent,
              height: 10,
              backgroundColor: colors.RASPBERRY,
            }}
          />
        </View>
      </View>
    );
  }
}
