import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Animated, Easing } from 'react-native';
import images from 'images';

import styles from './styles';

export default class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.opacityValue = new Animated.Value(0);
  }

  componentDidMount() {
    if (this.props.opacityAnimate) {
      this.opacityAnimate();
    }
  }

  opacityAnimate() {
    Animated.timing(
      this.opacityValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.easeOut,
        delay: 0,
      },
    ).start();
  }

  render() {
    let opacityValue;

    if (this.props.opacityAnimate) {
      opacityValue = this.opacityValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      });
    } else {
      opacityValue = 1;
    }

    return (
      <Animated.Image
        source={images.defaultAvatar}
        style={[styles.avatar, { opacity: opacityValue }]}
      />
    );
  }
}

Avatar.defaultProps = {
  opacityAnimate: false,
};

Avatar.propTypes = {
  opacityAnimate: PropTypes.bool,
};
