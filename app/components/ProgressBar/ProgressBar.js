import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import { colors } from 'typography';
import styles from './styles';

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressBarWidth: 0,
      calculatedPercent: 0,
    };
  }

  calculatePercent(width) {
    const { value } = this.props;
    const progressBarWidth = !width ? this.state.progressBarWidth : width;
    const calculatedPercent = (progressBarWidth / 100) * value;

    this.setState({
      progressBarWidth,
      calculatedPercent,
    });
  }

  handleScaleLayout = (evt) => {
    const { width } = evt.nativeEvent.layout;
    this.calculatePercent(width);
  }

  render() {
    const { title } = this.props;

    return (
      <View style={styles.progressBarContainer}>
        <Text style={styles.progressBarTitle}>{title}</Text>
        <View
          style={styles.progressBar}
          onLayout={this.handleScaleLayout}
        >
          <View
            style={[
              styles.progressScale,
              { width: this.state.calculatedPercent },
            ]}
          />
        </View>
      </View>
    );
  }
}

ProgressBar.propTypes = {
  title: PropTypes.string.isRequired,
};
