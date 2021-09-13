import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './pages/Authentication/Login/Login';
import SignUp from './pages/Authentication/SignUp/SignUp';

import Home from './pages/Home/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/auth/login' component={Login}/>
        <Route path='/auth/signup' component={SignUp}/>
        <Route exact path='/' component={Home}/>
      </Switch>
    </Router>
  );
};

export default App;