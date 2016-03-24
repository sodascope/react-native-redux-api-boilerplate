import types from '../config/action-types';
import ReduxMiddleware, { CALL_API } from "redux-api-middleware";

module.exports = {
  testcall: function() {
    console.log(CALL_API);

    return {
      [CALL_API]: {
        endpoint: "http://localhost:3000",
        method: "GET",
        types: [
          types.API_TEST_REQUEST,
          types.API_TEST_SUCCESS,
          types.API_TEST_FAILURE
        ]
      }
    }
  }
}
