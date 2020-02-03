import React from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => {

    const handleChange = () => {

    }

    const handleSubmit = e => {
        e.preventDefault();
    }
    return(
        <div>
            <h2>Sign Up to Dev Desk</h2>
            <label>Email Address:<input type="text" placeholder="Enter Email Address" name="email" onChange={handleChange} /></label>
            <label>Password:<input type="password" placeholder="Enter Email Address" name="password" onChange={handleChange} /></label>
            <label>Confirm Password:<input type="password" placeholder="Enter Email Address" name="confirmpassword" onChange={handleChange} /></label>
            <select>
                <option>Staff</option>
                <option>Student</option>
                <option>Staff &amp; Student</option>
            </select>
            <button onClick={handleSubmit}>Sign Up</button>
            <Link to="/">Sign In</Link>
        </div>
    )
}

export default SignupForm;
//needs to send axios call that posts the new user to the backend
