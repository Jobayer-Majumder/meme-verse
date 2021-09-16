import React, { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './pages/Authentication/Login/Login';
import SignUp from './pages/Authentication/SignUp/SignUp';
import Home from './pages/Home/Home';


export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = React.useState();
  
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/auth/login' component={Login} />
          <Route path='/auth/signup' component={SignUp} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;