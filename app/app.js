import React, { Component, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { Router } from 'react-native-router-flux';

import scenes from './config/routes';
import configureStore from './config/configure_store';

class App extends Component {
	displayName: 'App';

	render () {
    var store = configureStore();

		console.log("root.store: " + store );
    return (
			<Provider store={ store }>
				<Router scenes={ scenes } />
			</Provider>
		)
	}
};
module.exports = App;
