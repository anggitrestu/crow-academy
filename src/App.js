import React from 'react';
import LoginPage from './Page/LandingPage/LoginPage';
import Register from './Page/Register/RegisterPage';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
