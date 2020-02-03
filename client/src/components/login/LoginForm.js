import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {

    const [ credentials, setCredentials ] = useState({})

    const handleChange = e => {
        setCredentials({
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios
        .post(``, credentials)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return(
        <div>
            <h2>Login to DevDesk</h2>
            <label>Email: <input type="text" placeholder="Enter Email Address" name="email" onChange={handleChange} /></label>
            <label>Password: <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} /></label>
            <button onClick={handleSubmit}>Sign In</button>
            <Link to="/signup">Sign Up</Link>
        </div>
    );
}

export default LoginForm;

//needs to save token
//needs to forward user to '/dashboard' to match up with the privateroute in app.js

import React from 'react';

function LoginForm(props) {
    return (
        <div>
            I'm the Login Form
        </div>
    );
}

export default LoginForm;