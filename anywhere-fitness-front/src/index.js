import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//redux things
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./utils/reducers";

//import middlwarenp
import thunk from "redux-thunk";
import logger from "redux-logger";

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
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
