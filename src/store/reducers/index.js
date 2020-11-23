const { combineReducers } = require("redux");

import tempReducer from "./temp";

const appReducer = combineReducers({
  temp: tempReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_USER") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
