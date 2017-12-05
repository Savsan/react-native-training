import React from 'react';
import { View, Modal, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActionCreators from './actions';
import PropTypes from 'prop-types';

import { Header, ActionsButton, Logo, Avatar, ProgressBar } from 'reusable-components';
import ActionsModal from './components';
import { colors } from 'typography';
import styles from './styles';

class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Avatar />
        </View>
        <View style={styles.progressBarContainer}>
          <ProgressBar
            title="Personal"
            percent={10}
          />
          <ProgressBar
            title="Project Activities"
            percent={50}
          />
          <ProgressBar
            title="Soft Skills"
            percent={70}
          />
          <ProgressBar
            title="Hard Skills"
            percent={60}
          />
        </View>
        <ActionsModal
          closeMainScreenModal={this.props.closeMainScreenModal}
          isOpenedModal={this.props.mainScreen.isOpenedModal}
          navigation={this.props.navigation}
          username={this.props.user.username}
          position={this.props.user.position}
        />
      </View>
    );
  }
}

MainScreen.propTypes = {
  mainScreen: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  closeMainScreenModal: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    mainScreen: state.mainScreen,
    user: state.auth,
  };
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(allActionCreators, dispatch),
  dispatch,
});

MainScreen = connect(mapStateToProps, mapDispatchToProps)(MainScreen);

export default MainScreen;
