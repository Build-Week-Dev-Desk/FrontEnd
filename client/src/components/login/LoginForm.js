
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./LoginForm.scss";


const LoginForm = props => {
    const { register, handleSubmit, errors } = useForm()
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
            
                    <label className="email"><h3>Email:</h3> <input type="text" placeholder="Enter Email Address" name="email" ref={register({ required: true })} /></label>
                    {errors.email && errors.email.type === "required" && (<p className="errors">Email is required</p>)}
                    <label className="password"><h3>Password:</h3> <input type="password" placeholder="Enter Password" name="password" ref={register({ required: true, minLength: 6 })} /></label>
                    {errors.password && errors.password.type === "required" && (<p className="errors">Password is required</p>)}
                    {errors.password && errors.password.type === "minLength" && (<p className="errors">Password is required to be at least 6 characters</p>)}
                    <label>Pick Your Group:
                    <select name="role" ref={register({ required: true })}>
                    <option value="">Select...</option>    
                    <option value="student">Student</option>
                    <option value="staff">Staff</option>
                    <option value="both">Both</option>
                </select>
                {errors.role && errors.role.type === "required" && (<p className="errors">Role is required</p>)}
            </label>
            <input className="submitbtn green" type="submit" />
            <Link className="submitbtn green" to="/signup">Sign Up</Link>
        </form>
        </div>
  );
};

export default LoginForm;
