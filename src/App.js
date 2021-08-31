import React from "react";
import LoginPage from "./LandingPage/LoginPage";
import Register from "./Register/RegisterPage";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Register">
          <Register />
        </Route>
        <Route>
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
