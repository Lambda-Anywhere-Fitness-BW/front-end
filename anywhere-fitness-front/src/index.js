import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//redux things
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./utils/reducers";

//import middlwarenp
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//applyMiddleware(thunk, logger));
console.log("STORE", store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
