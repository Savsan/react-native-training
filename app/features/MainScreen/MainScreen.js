import React from 'react';
import { View, Modal, Text, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActionCreators from './actions';
import PropTypes from 'prop-types';
import { Camera, Permissions } from 'expo';
import { Header, ActionsButton, Logo, Avatar, ProgressBar, PhotoMaker } from 'reusable-components';
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
      hasCameraPermission: false,
      image: images.defaultAvatar,
    };
  }

  componentDidMount() {
    this.getGeoLocation();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.weather) {
      this.checkIsNight(nextProps.weather.dt);
    }
  }

  getGeoLocation() {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        this.setState({
          location,
        });
        this.getWeather();
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  getWeather() {
    const { latitude, longitude } = this.state.location.coords;
    const { requestWeather, dispatch } = this.props;

    dispatch(requestWeather(latitude, longitude));
  }

  setImage = (image) => {
    this.setState({
      image,
      hasCameraPermission: false,
    });
    this.closeCamera();
  }

  closeCamera = () => this.setState({ hasCameraPermission: false });

  cameraStatus = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  checkIsNight(dt) {
    const date = new Date(dt * 1000);
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
          <TouchableOpacity onPress={this.cameraStatus}>
            <Avatar
              opacityAnimate
              image={this.state.image}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.progressBarContainer}
          data={this.progressConfig}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderBars}
        />
        <ActionsModal
          toggleMainScreenModal={this.props.toggleMainScreenModal}
          isOpenedModal={this.props.mainScreen.isOpenedModal}
          navigation={this.props.navigation}
          username={this.props.user.username}
          position={this.props.user.position}
        />
        <PhotoMaker
          hasCameraPermission={this.state.hasCameraPermission}
          setImage={this.setImage}
          closeCamera={this.closeCamera}
        />
      </View>
    );
  }
}

MainScreen.defaultProps = {
  weather: null,
};

MainScreen.propTypes = {
  mainScreen: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  weather: PropTypes.object,
  toggleMainScreenModal: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  requestWeather: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    mainScreen: state.mainScreen,
    user: state.auth,
    weather: state.weather,
  };
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(allActionCreators, dispatch),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
