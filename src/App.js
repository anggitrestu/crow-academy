import React from 'react';
import LoginPage from './Page/LoginPage';
import RegisterPage from './Page/Register/index.js';
import TutorPage from './Page/Tutor';
import Header from './Parts/Header';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import 'assets/scss/style.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/tutor" component={TutorPage}></Route>
        <Route path="/" component={Header}></Route>
      </Switch>
    </Router>
  );
}

export default App;
