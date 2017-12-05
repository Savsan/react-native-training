import React from 'react';
import { View, Image } from 'react-native';
import images from 'images';

import styles from './styles';

export default class Avatar extends React.Component {
  render() {
    return (
      <Image
        source={images.defaultAvatar}
        style={styles.avatar}
      />
    );
  }
}
