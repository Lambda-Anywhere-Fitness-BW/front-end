import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//redux things
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

//import middlware
import thunk from "redux-thunk";
import logger from "logger";

//import reducer when created

function dummyReducer() {
  return {
    title: "Hello world! I'm in the Redux store!",
  };
}

const store = createStore(dummyReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
