import React from 'react';
import { View, Modal, Text, StyleSheet, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import mapActionsToProps from '../config/actions';
import PropTypes from 'prop-types';

class MainScreen extends React.Component {
  static navigationOptions = ({ screenProps }) => ({
    title: 'Main screen',
    headerRight:
  <Ionicons
    style={{ marginRight: 20 }}
    name="md-person"
    size={32}
    color="black"
    onPress={screenProps.mainScreen.openMainScreenModal}
  />,
  });

  constructor(props) {
    super(props);
    this.state = {
      isAuthorised: false,
    };

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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: 'rgba(52, 52, 52, 0.9)',
  },
  modalHeader: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 40,
  },
  modalCloseButton: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  modalItemsContainer: {
    marginRight: 50,
  },
});

function mapStateToProps(state) {
  return {
    mainScreen: state.mainScreen,
    user: state.auth,
  };
}

MainScreen = connect(mapStateToProps, mapActionsToProps)(MainScreen);

export default MainScreen;
