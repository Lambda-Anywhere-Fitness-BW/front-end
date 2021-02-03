import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register'
import MarketingPage from './marketing-comp/marketingPage';


const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={MarketingPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register} />
        <PrivateRoute path="/dash"/>
      </Switch>
    </Router>
    </>
  );
}
export default App;