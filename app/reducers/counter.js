import types from '../config/action-types';

var initialState = 0;

module.exports = function(state, action) {
	if ( !state )
		state = initialState;

	switch (action.type) {
		case types.ADD:
			return (state + 1)
			break;

		default:
			return state;
	}
};
