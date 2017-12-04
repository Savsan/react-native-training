import React from 'react';
import { Provider } from 'react-redux';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { colors, fonts } from 'typography';
import images from 'images';
import { Ionicons } from '@expo/vector-icons';

import { RootComponent } from 'features';

import store from './app/store/store';

export default class App extends React.Component {
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
        'oswald-bold': fonts.oswaldBold,
        'oswald-light': fonts.oswaldLight,
        'oswald-regular': fonts.oswaldRegular,
        'source-sans-pro-bold': fonts.sourceSansProBold,
        'source-sans-pro-regular': fonts.sourceSansProRegular,
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
    backgroundColor: colors.BLACK,
  },
});
