import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Animated, Easing } from 'react-native';

import { colors } from 'typography';
import styles from './styles';

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.scaleRiseValue = new Animated.Value(0);
    this.state = {
      progressBarWidth: 0,
      calculatedPercent: 0,
    };
  }

  componentDidMount() {
    this.rise();
  }

  rise() {
    Animated.timing(
      this.scaleRiseValue,
      {
        toValue: 1,
        duration: 700,
        easing: Easing.easeOut,
        delay: 100,
      },
    ).start();
  }

  handleScaleLayout = (evt) => {
    const { width } = evt.nativeEvent.layout;
    this.calculatePercent(width);
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

  render() {
    const { title } = this.props;
    const scaleEndingStyle = this.props.value < 100
      ? styles.progressScaleBleed
      : null;
    const rise = this.scaleRiseValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, this.state.calculatedPercent],
    });

    return (
      <View style={styles.progressBarContainer}>
        <Text style={styles.progressBarTitle}>{title}</Text>
        <View
          style={styles.progressBar}
          onLayout={this.handleScaleLayout}
        >
          <Animated.View
            style={[
              styles.progressScale,
              { width: rise },
            ]}
          >
            <View style={scaleEndingStyle} />
          </Animated.View>
        </View>
      </View>
    );
  }
}

ProgressBar.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
