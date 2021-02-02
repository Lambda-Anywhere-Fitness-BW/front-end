import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import SignUpInstructor from './components/SignUpInstructor'
import MarketingPage from './marketing-comp/marketingPage';


const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={MarketingPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={SignUpInstructor} />
        <PrivateRoute path="/dash"/>
      </Switch>
    </Router>
    </>
  );
}
export default App;