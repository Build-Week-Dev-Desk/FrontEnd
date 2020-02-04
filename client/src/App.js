import React from "react";
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

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={LoginForm} />
        <Route path="/login" component={LoginForm} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/mytickets" component={MyTickets} />
        <PrivateRoute path="/createticket" component={CreateTicketForm} />
        <Route path="/signup" component={SignupForm} />
      </div>
    </Router>
  );
}

export default App;
