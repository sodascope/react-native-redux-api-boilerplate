import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import createLogger from 'redux-logger';

var rootReducer = require('../reducers');

var logger = createLogger({
	level: 'info',
	collapsed: true
});

var createStoreWithMiddleware = compose(
	applyMiddleware(apiMiddleware, logger)(createStore)
);

module.exports = function(initialState) {
	return createStoreWithMiddleware(rootReducer, initialState);
};
