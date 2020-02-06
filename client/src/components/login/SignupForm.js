import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Axios from 'axios';

const SignupForm = props => {

    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => { 
        console.log(data)
        Axios.post('https://bwdevdesk.herokuapp.com/api/auth/register', data)
        .then(res => {
            console.log(res)
            props.history.push('/login')
        })
        .catch(err => console.log(err))
     }

    return(
        <div className="loginpage">
            <h2 className="logintitle">Sign Up to Dev Desk</h2>
            <form className="loginpage" onSubmit={handleSubmit(onSubmit)}>
            
            <label><h3>Name:</h3><input type="text" placeholder="Enter Your Name" name="name" ref={register({ required: true })} /></label>
            {errors.name && errors.name.type === "required" && (
              <p className="errors">This is required</p>)}
            <label><h3>Email Address:</h3><input type="text" placeholder="Enter Email Address" name="email" ref={register({ required: true })} /></label>
            {errors.email && errors.email.type === "required" && (
              <p className="errors">This is required</p>)}
            <label><h3>Password:</h3><input type="password" placeholder="Enter Password" name="password" ref={register({ required: true, minLength: 6 })} /></label>
            {errors.password && errors.password.type === "required" && (
              <p className="errors">This is required</p>)}
            {errors.password && errors.password.type === "minLength" && (<p     className="errors">Password is required to be at least 6 characters</p>)}
            {/* <label>Confirm Password:<input type="password" placeholder="Confirm Password" name="confirmpassword" ref={register} /></label> */}

               <label>Pick Your Group:
                <select name="role" ref={register({ required: true })}>
                    <option value="">Select...</option>
                    <option value="student">Student</option>
                    <option value="staff">Staff</option>
                    <option value="both">Both</option>
                </select>
                {errors.role && errors.role.type === "required" && (
              <p className="errors">This is required</p>)}
            </label>
            <button className="submitbtn">Sign Up</button>
            <Link className="submitbtn" to="/">Sign In</Link>
        </form>
        </div>
    )
}

export default SignupForm;
//needs to send axios call that posts the new user to the backend

//needs to send axios call that posts the new user to the backend

