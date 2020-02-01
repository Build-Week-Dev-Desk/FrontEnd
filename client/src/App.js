import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./tools/PrivateRoute";

//components
import Dashboard from "./components/dashboard/Dashboard";
import LoginForm from "./components/login/LoginForm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={LoginForm} />
        <PrivateRoute path="/dashboard" component={Dashboard} />{" "}
      </div>
    </Router>
  );
}

export default App;
