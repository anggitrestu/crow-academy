import React from "react";
import LoginPage from "./Page/LandingPage/LoginPage";
import Register from "./Page/Register/RegisterPage";
import Header from "./Parts/Header";
import Dashboard from "./Page/Beranda/Dahsboard";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import 'assets/scss/style.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
        <Route path="/header">
          <Header />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
