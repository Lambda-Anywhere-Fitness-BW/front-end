import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

import ClientRegister from "./components/client/clientRegister";
import InstructorRegister from "./components/client/clientRegister";

import MarketingPage from "./marketing-comp/marketingPage";
import CreateClassPage from "./components/instructor/classes/createClassPage";

//test
import MyClassesMain from "./components/client/classes/MyClassesMain";
import { createClass } from "./utils/actions/userActions";
import PunchPassMain from "./components/client/punchpass/PunchPassMain";
import InstructorClassesMain from "./components/instructor/classes/inClassMain";
import InPunchPassMain from "./components/instructor/punchpass/InPunchPassMain";
import CreatePunchPass from "./components/instructor/punchpass/CreatePunchPass";
import ClientProfile from "./components/client/ClientProfile";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={ClientProfile} />
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
