import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./tools/PrivateRoute";

//components
import Dashboard from "./components/dashboard/Dashboard";
import LoginForm from "./components/login/LoginForm";
import SignupForm from "./components/login/SignupForm";
import NavBar from "./components/NavBar";
import CreateTicketForm from './components/dashboard/CreateTicketForm';
import MyTickets from './components/dashboard/MyTickets';
import Logout from './components/login/Logout';
//import Profile from './components/login/Profile';

function App() {

  const [ loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      setLoggedIn(false)
    } else {
      setLoggedIn(true)
    }
  }, [])


  console.log(loggedIn)
  return (
    <Router>
      <div className="App">
        <NavBar loggedIn={loggedIn} />
        <Route exact path="/" render={(props) => <LoginForm {...props} setLoggedIn={setLoggedIn} loggedIn={loggedIn} />} />
        <Route path="/login" render={(props) => <LoginForm {...props} setLoggedIn={setLoggedIn} loggedIn={loggedIn} />} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/mytickets" component={MyTickets} />
        <PrivateRoute path="/createticket" component={CreateTicketForm} />
        {/* <PrivateRoute path="/profile" component={Profile} /> */}
        <Route path="/signup" component={SignupForm} />
        <Route path="/logout" component={Logout} />
      </div>
    </Router>
  );
}

export default App;
