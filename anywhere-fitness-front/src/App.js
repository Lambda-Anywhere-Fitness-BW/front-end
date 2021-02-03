import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ClientRegister from './components/clientRegister'
import InstructorRegister from './components/clientRegister'
import MarketingPage from './marketing-comp/marketingPage';


const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={MarketingPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/register/client" component={ClientRegister} />
        <Route path="/register/instructor" component={InstructorRegister} />
        <PrivateRoute path="/dash"/>
      </Switch>
    </Router>
    </>
  );
}
export default App;