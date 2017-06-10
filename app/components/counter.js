import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CounterActions from "../actions/counter";
import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';

var Counter = React.createClass({
	displayName: "Counter",

	_onPressButton: function() {
		this.props.incrementCounter();
	},

	render: function() {
		return (
			<TouchableHighlight onPress={this._onPressButton}>
				<Text style={styles.description}>
					Click to increment: { this.props.counter }
				</Text>
			</TouchableHighlight>
		)
	},

	handleClick: function(event) {
		this.props.incrementCounter(event)
	}

});

var styles = StyleSheet.create({
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF'
  }
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(CounterActions, dispatch)
}

function mapStateToProps(state) {
	return {
		counter: state.counter
	}
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Counter)
