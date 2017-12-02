import React from 'react';
import { View, Text, Image } from 'react-native';
import { images } from '../../config';
import PropTypes from 'prop-types';

export default class Logo extends React.Component {
  render() {
    const {
      logoContainer, logoBraces, logoTitle,
    } = this.props;
    const titleText = this.props.titleText ? this.props.titleText : 'epamer';

    return (
      <View style={logoContainer}>
        <Image
          source={images.leftBraces}
          style={logoBraces}
        />
        <Text
          style={logoTitle}
          includeFontPadding={false}
        >
          {titleText}
        </Text>
        <Image
          source={images.rightBraces}
          style={logoBraces}
        />
      </View>
    );
  }
}

Logo.propTypes = {
  logoContainer: PropTypes.number.isRequired,
  logoBraces: PropTypes.number.isRequired,
  logoTitle: PropTypes.number.isRequired,
};
