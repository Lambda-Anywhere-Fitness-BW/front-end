import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { composeWithDevTools } from "redux-devtools-extension";

//redux things
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./utils/reducers";

//import middlwarenp
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
console.log("STORE", store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
