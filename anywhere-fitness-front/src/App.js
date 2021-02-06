import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

import ClientRegister from "./components/client/clientRegister";
import InstructorRegister from "./components/instructor/instructorRegister";

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
import InstructorProfile from "./components/instructor/InstructorProfile";
import SearchMain from "./components/client/Search/SearchMain";
import MyInstructorClasses from "./components/instructor/classes/MyInstructorClasses";
import InPunchPasses from "./components/instructor/punchpass/InPunchPasses";
import InAppHeader from "./components/instructor/InAppHeader";
import SearchList from "./components/client/Search/SearchList";
import LoginLoading from "./components/LoginLoading";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={MarketingPage} />

          <Route path="/login" component={Login} />

          <Route path="/register/client" component={ClientRegister} />
          <Route path="/register/instructor" component={InstructorRegister} />
        
          <PrivateRoute path="/loading" component={LoginLoading} />
          <PrivateRoute
            path="/instructor/classes"
            component={InstructorClassesMain}
          />
          <PrivateRoute
            path="/instructor/punchpasses"
            component={InPunchPassMain}
          />
          <PrivateRoute
            path="/instructor/profile"
            component={InstructorProfile}
          />
          <PrivateRoute path="/client/search" component={SearchMain} />
          <PrivateRoute path="/client/classes" component={MyClassesMain} />
          <PrivateRoute path="/client/punchpasses" component={PunchPassMain} />
          <PrivateRoute path="/client/profile" component={ClientProfile} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
