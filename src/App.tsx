import React, { useContext } from 'react';
import './App.css';
import { AuthContext} from './auth/AuthProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp';
import { Home } from './pages/Home';

function App() {
  const {currentUser} = useContext(AuthContext)
  const component = currentUser ? Home : Login;
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={component} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
