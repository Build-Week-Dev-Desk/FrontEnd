import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./tools/PrivateRoute";
import { Context } from "./contexts/context";

//components
import Dashboard from "./components/dashboard/Dashboard";
import LoginForm from "./components/login/LoginForm";
import SignupForm from "./components/login/SignupForm";
import NavBar from "./components/NavBar";

import CreateTicketForm from "./components/dashboard/CreateTicketForm";
import MyTickets from "./components/dashboard/MyTickets";
import Logout from './components/login/Logout';
// import Profile from './components/login/Profile';


function App() {
  const [state, setState] = useState({});

  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, []);

  // console.log('logged in', loggedIn)

  return (
    <Context.Provider value={state}>
      <Router>
        <div className="App">
          <NavBar loggedIn={loggedIn} />
          <Route
            exact
            path="/"
            render={props => (
              <LoginForm
                {...props}
                setLoggedIn={setLoggedIn}
                loggedIn={loggedIn}
                setState={setState}
              />
            )}
          />
          <Route
            path="/login"
            render={props => (
              <LoginForm
                {...props}
                setLoggedIn={setLoggedIn}
                loggedIn={loggedIn}
                setState={setState}
              />
            )}
          />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/mytickets" component={MyTickets} />
          <PrivateRoute path="/createticket" component={CreateTicketForm} />
          <PrivateRoute path="/logout" component={Logout} />
          {/* <PrivateRoute path="/profile" component={Profile}/> */}
          <Route path="/signup" component={SignupForm} />
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
