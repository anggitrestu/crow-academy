import React from 'react';
import LoginPage from './Page/LoginPage';
import RegisterPage from './Page/Register/index.js';
import TutorPage from './Page/Tutor';
import Header from './Parts/Header';
import './index.css';

import { Switch, Route, Redirect } from 'react-router-dom';

// import 'assets/scss/style.scss';

function App() {
  return (
    <Switch>
      <Route path="/register" component={RegisterPage}></Route>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/tutor/beranda-kelas" component={TutorPage}></Route>
      <Route path="/tutor/beranda-artikel" component={TutorPage}></Route>
      <Redirect from="/tutor" to="/tutor/beranda-kelas" />
      <Route path="/" component={Header}></Route>
    </Switch>
  );
}

export default App;
