import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Camera } from 'expo';

import ControlButton from './components/ControlButton';
import styles from './styles';

export default class PhotoMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: Camera.Constants.Type.back,
      controlButtonsConfig: [
        { name: 'md-reverse-camera', onPress: this.onFlip, iconStyle: styles.reverse },
        { name: 'md-camera', onPress: this.onSnap, iconStyle: styles.snapShoot },
        { name: 'md-close', onPress: this.props.closeCamera, iconStyle: styles.close },
      ],
    };
  }

  onFlip = () => {
    const type = this.state.type === Camera.Constants.Type.back ?
      Camera.Constants.Type.front :
      Camera.Constants.Type.back;

    this.setState({ type });
  }

  onSnap = async () => {
    if (this.camera) {
      const photo = await this.camera.takePictureAsync();

      this.props.setImage(photo);
    }
  };

  render() {
    const { controlButtonsConfig } = this.state;
    const buttons = controlButtonsConfig.map(props => (
      <ControlButton key={props.name} {...props} />
    ));

    if (!this.props.hasCameraPermission) {
      return <View />;
    }

    return (
      <View style={styles.container}>
        <Camera
          style={styles.cameraStyle}
          type={this.state.type}
          ref={ref => this.camera = ref}
        >
          <View style={styles.controlButtonsContainer}>
            {buttons}
          </View>
        </Camera>
      </View>
    );
  }
}

PhotoMaker.propTypes = {
  hasCameraPermission: PropTypes.bool.isRequired,
  setImage: PropTypes.func.isRequired,
  closeCamera: PropTypes.func.isRequired,
};
