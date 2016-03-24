'use strict';

import React, {
    StyleSheet,
    View,
    Text,
    Component
} from 'react-native';
import Counter from './counter';

class ScreenOne extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          This is your Home View
        </Text>
        <Counter />
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
    backgroundColor: '#e74c3c',
  }
});

module.exports = ScreenOne;