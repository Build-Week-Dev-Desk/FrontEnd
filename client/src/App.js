import React from "react";
import "./App.css";


import { BrowserRouter as Router, Route } from "react-router-dom";
//import PrivateRoute from "./tools/PrivateRoute";

//components
//import Dashboard from "./components/dashboard/Dashboard";
import LoginForm from "./components/login/LoginForm";
import NavBar from "./components/NavBar";
import CreateTicketForm from './components/dashboard/CreateTicketForm';
import MyTickets from './components/dashboard/MyTickets';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route path="/login" component={LoginForm} />
        {/* This private route is not working properly yet */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/mytickets" component={MyTickets} />
        <Route path="/createticket" component={CreateTicketForm} />
        <Route path="/signup" component={SignupForm} />
      </div>
    </BrowserRouter>
  );
}

export default App;
