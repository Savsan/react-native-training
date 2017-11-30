import React from 'react';
import { View, Modal, Text, StyleSheet, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import mapActionsToProps from '../../config/actions';
import PropTypes from 'prop-types';

import { Header } from '../../components';
import styles from './styles';

class MainScreen extends React.Component {
  static navigationOptions = ({ screenProps }) => {
    const openModal = screenProps.mainScreen.openMainScreenModal;

    return ({
      header: <Header
        title="epamer"
        leftIconName="ios-arrow-round-back"
        leftIconVisibility={false}
        onLeftIconPress={false}
        rightIconVisibility
        rightIconName="md-person"
        onRightIconPress={openModal}
      />,
    });
  };

  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.closeMainScreenModal();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>MainScreen</Text>
        <Modal
          animationType="slide"
          transparent
          visible={this.props.mainScreen.isOpenedModal}
          onRequestClose={() => { alert('Modal has been closed.'); }}
        >
          <View style={styles.modalContent}>
            <Ionicons
              style={styles.modalCloseButton}
              name="ios-close-circle-outline"
              size={32}
              color="white"
              onPress={this.closeModal}
            />
            <Text style={styles.modalHeader}>{this.props.user.username}</Text>
            <Text style={styles.modalHeader}>{this.props.user.position}</Text>
            <View style={styles.modalItemsContainer}>
              <Button
                onPress={() => {
                  this.props.navigation.navigate('About');
                  this.closeModal();
                }}
                title="Go to About"
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

MainScreen.propTypes = {
  mainScreen: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  closeMainScreenModal: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    mainScreen: state.mainScreen,
    user: state.auth,
  };
}

MainScreen = connect(mapStateToProps, mapActionsToProps)(MainScreen);

export default MainScreen;
