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
        })
        .catch(err => console.log(err))
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Login to DevDesk</h2>
            <label>Email: <input type="text" placeholder="Enter Email Address" name="email" ref={register} /></label>
            <label>Password: <input type="password" placeholder="Enter Password" name="password" ref={register} /></label>
            <input type="submit" />
            <Link to="/signup">Sign Up</Link>
        </form>
    );
}

export default LoginForm;