import React from 'react';
import { View, Modal, Text, Button, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActionCreators from './actions';
import PropTypes from 'prop-types';

import { Header, ActionsButton, Logo, Avatar, ProgressBar } from 'reusable-components';
import ActionsModal from './components';
import styles from './styles';
import images from 'images';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.progressConfig = [
      { title: 'Personal', value: 10 },
      { title: 'Project Activities', value: 50 },
      { title: 'Soft Skills', value: 100 },
      { title: 'Hard Skills', value: 60 },
    ];
    this.state = {
      isNight: false,
    };
  }

  componentDidMount() {
    this.getGeoLocation();

    setTimeout(() => {
      console.log(this.state);
    }, 1000);
  }

  getGeoLocation() {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        this.setState({
          location,
        });
        this.checkIsNight();
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  checkIsNight() {
    const date = new Date(this.state.location.timestamp);
    const hours = date.getHours();
    const isNight = hours >= 22 || hours < 6;

    this.setState({
      isNight,
    });
  }

  keyExtractor = (item, index) => item.title;

  renderBars = bars => (<ProgressBar
    key={bars.item.title}
    title={bars.item.title}
    value={bars.item.value}
  />);

  render() {
    const { isNight } = this.state;
    const bgOpacity = isNight ? 0.5 : +!isNight;

    return (
      <View style={styles.container}>
        <Image
          source={images.vectorBlueBg}
          style={{
            position: 'absolute', left: 0, top: 0, opacity: bgOpacity,
          }}
        />
        <View style={styles.avatarContainer}>
          <Avatar
            opacityAnimate
          />
        </View>
        <FlatList
          style={styles.progressBarContainer}
          data={this.progressConfig}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderBars}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
