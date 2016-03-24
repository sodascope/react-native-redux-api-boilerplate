import types from '../config/action-types';

var initialState = { "status": "unknown" };

module.exports = function(state, action) {
  if ( !state )
    state = initialState;

    switch(action.type) {
      case types.API_TEST_REQUEST:
        return state;
        break;

      case types.API_TEST_SUCCESS:
        console.log(action.payload);
  			return action.payload
        break;

      case types.API_TEST_FAILURE:
        return state;
        break;

      default:
        return state;
        break;
    }
};
