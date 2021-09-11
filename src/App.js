import React from 'react';
import LoginPage from './Page/LoginPage';
import RegisterPage from './Page/Register/index.js';
import BerandaTutor from './Page/Tutor/Beranda';
import MyProfile from './Page/Tutor/MyProfile';
import BuatKelas from './Page/Tutor/BuatKelas';
import KelasSaya from './Page/Tutor/KelasSaya';
import PostArtikel from './Page/Tutor/PostArtikel';
import ArtikelSaya from './Page/Tutor/ArtikelSaya';
import Home from './Parts/Home';

import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/register" component={RegisterPage}></Route>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/tutor/beranda-kelas" component={BerandaTutor}></Route>
      <Route path="/tutor/beranda-artikel" component={BerandaTutor}></Route>
      <Route path="/tutor/my-profile" component={MyProfile}></Route>
      <Route path="/tutor/buat-kelas" component={BuatKelas}></Route>
      <Route path="/tutor/kelas-saya" component={KelasSaya}></Route>
      <Route path="/tutor/post-artikel" component={PostArtikel}></Route>
      <Route path="/tutor/artikel-saya" component={ArtikelSaya}></Route>
      <Redirect from="/tutor" to="/tutor/beranda-kelas" />
      <Route path="/" component={Home}></Route>
    </Switch>
  );
}

export default App;
