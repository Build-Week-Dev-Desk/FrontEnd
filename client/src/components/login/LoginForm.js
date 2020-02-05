import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form'

const LoginForm = props => {

    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        axios
        .post(`https://bwdevdesk.herokuapp.com/api/auth/login`, data)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', res.data.role)
            localStorage.setItem('id', res.data.id)
            props.history.push('/dashboard')
            props.setLoggedIn(true)
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="loginpage">
            <h1 className="logintitle">Login to DevDesk</h1>
                <form className="loginpage" onSubmit={handleSubmit(onSubmit)}>
            
                    <label className="email"><h3>Email:</h3> <input type="text" placeholder="Enter Email Address" name="email" ref={register} /></label>
                    <label className="password"><h3>Password:</h3> <input type="password" placeholder="Enter Password" name="password" ref={register} /></label>
                    <label>Pick Your Group:
                    <select name="role" ref={register}>
                    <option value="student">Student</option>
                    <option value="staff">Staff</option>
                    <option value="both">Both</option>
                </select>
            </label>
            <input className="submitbtn" type="submit" />
            <Link className="submitbtn" to="/signup">Sign Up</Link>
        </form>
        </div>
    );
}

export default LoginForm;