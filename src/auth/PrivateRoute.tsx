import React, { useContext } from 'react'
import { Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { AuthContext } from './AuthProvider'

export const PrivateRoute: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  const Component = currentUser ? Home : Login
  return <Route exact path="/" component={Component} />
}
