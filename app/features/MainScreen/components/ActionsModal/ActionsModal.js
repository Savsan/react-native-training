import React from 'react';
import { View, Text, Modal, Button,
  Dimensions, PanResponder, Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import { ActionsButton, Logo } from 'reusable-components';

import { colors } from 'typography';
import styles from './styles';

export default class ActionsModal extends React.Component {
  constructor(props) {
    super(props);
    this.restorePositionValue = new Animated.Value(0);
    this.state = {
      topPosition: 0,
      swipeDistance: 170,
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        this.moveModal(gestureState);
      },
      onPanResponderRelease: () => {
        this.checkModalAnimation();
      },
    });
  }

  moveModal(gestureState) {
    this.setState({
      topPosition: gestureState.moveY - gestureState.y0,
    });
  }

  checkModalAnimation() {
    const { topPosition, swipeDistance } = this.state;

    if (topPosition > swipeDistance) {
      this.closeModal();
    } else {
      this.createModalAnimation();
    }
  }

  restorePosition = () => {
    this.setState({
      topPosition: 0,
    });
  }

  createModalAnimation() {
    const lastPositionY = this.state.topPosition;
    this.restorePositionValue.setValue(0);
    this.setState({
      topPosition: this.restorePositionValue.interpolate({
        inputRange: [0, 1],
        outputRange: [lastPositionY, 0],
      }),
    });
    this.restorePositionAnimated();
  }

  restorePositionAnimated() {
    Animated.timing(
      this.restorePositionValue,
      {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
        easing: Easing.bounce,
        delay: 0,
      },
    ).start();
  }

  closeModal = () => {
    this.props.closeMainScreenModal();
    this.restorePosition();
  }

  navigateTo = screenName => () => {
    this.props.navigation.navigate(screenName);
    this.closeModal();
  }

  render() {
    let actionButtons;
    const actionButtonsConfig = [
      {
        iconName: 'md-home', color: `${colors.LIGHT_GRAY}`, size: 84, subtitle: 'Home', onPress: this.navigateTo('Home'),
      },
      {
        iconName: 'ios-briefcase', color: `${colors.LIGHT_GRAY}`, size: 84, subtitle: 'Work', onPress: this.navigateTo('Work'),
      },
      {
        iconName: 'md-star', color: `${colors.LIGHT_GRAY}`, size: 84, subtitle: 'ASMT', onPress: this.navigateTo('ASMT'),
      },
      {
        iconName: 'ios-chatbubbles', color: `${colors.LIGHT_GRAY}`, size: 84, subtitle: 'Soft', onPress: this.navigateTo('Soft'),
      },
      {
        iconName: 'md-code', color: `${colors.LIGHT_GRAY}`, size: 84, subtitle: 'Hard', onPress: this.navigateTo('Hard'),
      },
      {
        iconName: 'md-book', color: `${colors.LIGHT_GRAY}`, size: 84, subtitle: 'About', onPress: this.navigateTo('About'),
      },
    ];

    if (actionButtonsConfig.length) {
      actionButtons = actionButtonsConfig.map(config =>
        (<ActionsButton
          key={config.subtitle}
          {...styles}
          {...config}
        />));
    }

    return (
      <Modal
        animationType="slide"
        transparent
        visible={this.props.isOpenedModal}
        onRequestClose={this.restorePosition}
      >
        <Animated.View
          style={[
            styles.modalContent,
            {
              transform: [{
                translateY: this.state.topPosition,
              }],
            },
          ]}
          {...this._panResponder.panHandlers}
        >
          <View style={styles.modalCloseButtonContainer}>
            <ActionsButton
              style={styles.modalCloseButton}
              iconName="ios-close"
              color={colors.WHITE}
              size={50}
              onPress={this.closeModal}
            />
          </View>
          <View style={styles.modalHeader}>
            <Logo {...styles} titleText={this.props.username} />
            <Text style={styles.modalSubtitle}>{this.props.position}</Text>
          </View>
          <View style={styles.modalActionsContainer}>
            {actionButtons}
          </View>
        </Animated.View>
      </Modal>
    );
  }
}

ActionsModal.propTypes = {
  closeMainScreenModal: PropTypes.func.isRequired,
  isOpenedModal: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};
