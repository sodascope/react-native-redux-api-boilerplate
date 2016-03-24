import React, { Component, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ApiTestActions from "../actions/api-test";

class ApiTest extends Component {
  constructor(props) {
    super(props);
    this._onPressButton = this._onPressButton.bind(this)
  }

  _onPressButton() {
    console.log(this);
		this.props.testcall();
	}

  render() {
    return <TouchableHighlight onPress={this._onPressButton}>
      <Text style={styles.description}>
        Click to test api: { this.props.api.status }
      </Text>
    </TouchableHighlight>
  }
}

var styles = StyleSheet.create({
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF'
  }
});


function mapDispatchToProps(dispatch) {
	return bindActionCreators(ApiTestActions, dispatch)
}

function mapStateToProps(state) {
	return {
		api: state.apitest
	}
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(ApiTest)
