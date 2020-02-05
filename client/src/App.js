import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./tools/PrivateRoute";

//components
import Dashboard from "./components/dashboard/Dashboard";
import LoginForm from "./components/login/LoginForm";
import SignupForm from "./components/login/SignupForm";
import NavBar from "./components/NavBar";
import CreateTicketForm from "./components/dashboard/CreateTicketForm";
import MyTickets from "./components/dashboard/MyTickets";
import Logout from "./components/login/Logout";
import Profile from './components/login/Profile';

function App() {
  const [userType, setUserType] = useState()
  const [loggedIn, setLoggedIn] = useState();
  const [ user, setUser] = useState();
  console.log(user)
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
    if (localStorage.getItem("user") === 'student') {
      setUserType('student');
    } else if (localStorage.getItem("user") === 'staff'){
      setUserType('staff');
    } else if (localStorage.getItem("user") === 'both') {
      setUserType('both')
    }
    if (localStorage.getItem('id')) {
      setUser(localStorage.getItem('id'))
    }
  }, [localStorage.getItem('user')]);
  
  // console.log('logged in', loggedIn)

  return (
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
                setUserType={setUserType}
                setUser={setUser}
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
                setUserType={setUserType}
                setUser={setUser}
              />
            )}
          />
          <PrivateRoute path="/dashboard" component={Dashboard} userType={userType} />
          {/* <PrivateRoute path="/dashboard" render={props => (<Dashboard {...props} userType={userType} /> )} /> */}
          {/* <PrivateRoute path="/dashboard"><Dashboard /></PrivateRoute> */}
          <PrivateRoute path="/mytickets" component={MyTickets} userType={userType}/>
          <PrivateRoute path="/createticket" component={CreateTicketForm} />
          <PrivateRoute path="/logout" component={Logout} />
          <PrivateRoute path="/profile" component={Profile} user={user}/>
          <Route path="/signup" component={SignupForm} />
        </div>
      </Router>
  );
}

export default App;
