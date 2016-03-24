'use strict';

import React, {
    StyleSheet,
    View,
    Text,
    Component
} from 'react-native';
import ApiTest from './api-test';

class ScreenTwo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          This is your Second View
        </Text>
        <ApiTest />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  }
});

module.exports = ScreenTwo;
