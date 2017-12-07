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
    const value = this.props.value > 100 ? 100 : this.props.value;
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
    const scaleEndingStyle = this.props.value < 100
      ? styles.progressScaleBleed
      : null;

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
          >
            <View style={scaleEndingStyle} />
          </View>
        </View>
      </View>
    );
  }
}

ProgressBar.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
