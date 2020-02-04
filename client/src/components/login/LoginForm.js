import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form'

const LoginForm = props => {

    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        axios
        .post(`http://localhost:5001/api/login`, data)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            props.history.push('/dashboard')
            props.setLoggedIn(true)
            props.setState(res)
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="loginpage">
            <h1 className="logintitle">Login to DevDesk</h1>
        <form className="loginpage" onSubmit={handleSubmit(onSubmit)}>
            
            <label className="email"><h3>Email:</h3> <input type="text" placeholder="Enter Email Address" name="email" ref={register} /></label>
            <label className="password"><h3>Password:</h3> <input type="password" placeholder="Enter Password" name="password" ref={register} /></label>
            <input className="submitbtn" type="submit" />
            <Link className="submitbtn" to="/signup">Sign Up</Link>
        </form>
        </div>
    );
}

export default LoginForm;