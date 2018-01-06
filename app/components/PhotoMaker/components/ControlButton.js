import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export default class ControlButton extends React.Component {
  render() {
    const { name, onPress, iconStyle } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <Ionicons style={[styles.iconStyle, iconStyle]} name={name} />
      </TouchableOpacity>
    );
  }
}

ControlButton.defaultProps = {
  iconStyle: null,
};

ControlButton.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  iconStyle: PropTypes.number,
};
