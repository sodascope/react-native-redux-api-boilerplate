import { combineReducers } from "redux";

module.exports = combineReducers({
	counter: require('./counter'),
	apitest: require('./api-test'),
})
