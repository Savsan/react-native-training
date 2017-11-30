import React from 'react';
import { View, Text, Image } from 'react-native';
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
          source={require('../../assets/images/left-braces.png')}
          style={logoBraces}
        />
        <Text
          style={logoTitle}
          includeFontPadding={false}
        >
          {titleText}
        </Text>
        <Image
          source={require('../../assets/images/right-braces.png')}
          style={logoBraces}
        />
      </View>
    );
  }
}
