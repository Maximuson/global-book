const { combineReducers } = require("redux");

import tempReducer from "./temp";
import postsReducer from "./posts";

const appReducer = combineReducers({
  temp: tempReducer,
  posts: postsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_USER") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
