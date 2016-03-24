import types from '../config/action-types';

module.exports = {
	incrementCounter: function() {
		return {
			type: types.ADD
		}
	}
}
