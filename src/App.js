import React from 'react';
import LoginPage from './Page/LoginPage';
import RegisterPage from './Page/Register/index.js';
import BerandaTutor from './Page/Tutor/Beranda';
import MyProfile from './Page/Tutor/MyProfile';
import Home from './Parts/Home';
import './index.css';

import { Switch, Route, Redirect } from 'react-router-dom';

// import 'assets/scss/style.scss';

function App() {
  return (
    <Switch>
      <Route path="/register" component={RegisterPage}></Route>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/tutor/beranda-kelas" component={BerandaTutor}></Route>
      <Route path="/tutor/beranda-artikel" component={BerandaTutor}></Route>
      <Route path="/tutor/my-profile" component={MyProfile}></Route>
      <Redirect from="/tutor" to="/tutor/beranda-kelas" />
      <Route path="/" component={Home}></Route>
    </Switch>
  );
}

export default App;
