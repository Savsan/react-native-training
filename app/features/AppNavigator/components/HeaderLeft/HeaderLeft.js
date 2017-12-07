import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from 'typography';

export default class HeaderLeft extends React.Component {
  previousScreen = () => {
    this.props.navigation.goBack();
  }

  render() {
    const mainRouteName = this.props.mainRouteName;
    const { routeName } = this.props.navigation.state;
    const iconCondition = routeName !== mainRouteName;

    return (
      <View>
        {iconCondition &&
        <Ionicons
          name="md-arrow-back"
          size={24}
          color={colors.WHITE}
          onPress={this.previousScreen}
        />
        }
      </View>
    );
  }
}


HeaderLeft.propTypes = {
  navigation: PropTypes.object.isRequired,
  mainRouteName: PropTypes.string.isRequired,
};