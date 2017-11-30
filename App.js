import React from 'react';
import { Provider } from 'react-redux';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';

import store from './app/config/store';

import { Ionicons } from '@expo/vector-icons';

import { RootComponent } from './app/features';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  _loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      require('./app/assets/images/robot-dev.png'),
      require('./app/assets/images/robot-prod.png'),
    ]),
    Font.loadAsync([
      Ionicons.font,
      { 'oswald-bold': require('./app/assets/fonts/Oswald/Oswald-Bold.ttf') },
      { 'oswald-light': require('./app/assets/fonts/Oswald/Oswald-Light.ttf') },
      { 'oswald-regular': require('./app/assets/fonts/Oswald/Oswald-Regular.ttf') },
      { 'open-sans-pro-bold': require('./app/assets/fonts/SourceSansPro/SourceSansPro-Bold.otf') },
      { 'open-sans-pro-regular': require('./app/assets/fonts/SourceSansPro/SourceSansPro-Regular.otf') },
    ]),
  ]);

  _handleLoadingError = (error) => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          <RootComponent />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'black',
  },
});
