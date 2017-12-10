import React from 'react';
import { Provider } from 'react-redux';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { fontAssets } from 'typography';
import images from 'images';
import { Ionicons } from '@expo/vector-icons';

import { LauncherComponent } from 'features';
import { styles } from './styles';

import store from './store/store';

export default class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
    };
  }

  _loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      images.robotDev,
      images.robotProd,
    ]),
    Font.loadAsync([
      Ionicons.font,
      {
        'oswald-bold': fontAssets.oswaldBold,
        'oswald-light': fontAssets.oswaldLight,
        'oswald-regular': fontAssets.oswaldRegular,
        'source-sans-pro-bold': fontAssets.sourceSansProBold,
        'source-sans-pro-regular': fontAssets.sourceSansProRegular,
      },
    ]),
  ]);

  _handleLoadingError = (error) => {
    throw new Error(error);
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  }

  render() {
    if (!this.state.isLoadingComplete) {
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
          <LauncherComponent />
        </View>
      </Provider>
    );
  }
}
