import React from 'react';
import { Provider } from 'react-redux';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';

import store from './config/store';

import { Ionicons } from '@expo/vector-icons';

import RootComponent from './components/rootComponent';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  _loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync([
      Ionicons.font,
      { 'oswald-bold': require('./assets/fonts/Oswald/Oswald-Bold.ttf') },
      { 'oswald-light': require('./assets/fonts/Oswald/Oswald-Light.ttf') },
      { 'oswald-regular': require('./assets/fonts/Oswald/Oswald-Regular.ttf') },
      { 'open-sans-pro-bold': require('./assets/fonts/SourceSansPro/SourceSansPro-Bold.otf') },
      { 'open-sans-pro-regular': require('./assets/fonts/SourceSansPro/SourceSansPro-Regular.otf') },
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
    backgroundColor: 'red',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: '#39C2D7',
  },
});
