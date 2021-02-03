import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

import ClientRegister from "./components/client/clientRegister";
import InstructorRegister from "./components/client/clientRegister";

import MarketingPage from "./marketing-comp/marketingPage";
import CreateClassPage from "./components/instructor/createClassPage";

//test
import MyClassesMain from "./components/client/MyClassesMain";
import { createClass } from "./utils/actions/userActions";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={CreateClassPage} />
          <Route path="/login" component={Login} />

          <Route path="/register/client" component={ClientRegister} />
          <Route path="/register/instructor" component={InstructorRegister} />

          <PrivateRoute path="/dash" />
        </Switch>
      </Router>
    </>
  );
};
export default App;
