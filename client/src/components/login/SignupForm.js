import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Axios from 'axios';

const SignupForm = () => {

    const { register, handleSubmit } = useForm()
    const onSubmit = data => { 
        console.log(data)
        // Axios.post('https://bwdevdesk.herokuapp.com/api/tickets', data)
        // .then(res => (
        //     console.log(res)

        // ))
        // .catch(err => console.log(err))
     }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Sign Up to Dev Desk</h2>
            <label>Name:<input type="text" placeholder="Enter Your Name" name="name" ref={register} /></label>
            <label>Email Address:<input type="text" placeholder="Enter Email Address" name="email" ref={register} /></label>
            <label>Password:<input type="password" placeholder="Enter Password" name="password" ref={register} /></label>
            <label>Confirm Password:<input type="password" placeholder="Confirm Password" name="confirmpassword" ref={register} /></label>
            <label>Pick Your Group:
                <select name="group" ref={register}>
                    <option value="staff">Staff</option>
                    <option value="student">Student</option>
                    <option value="both">Staff &amp; Student</option>
                </select>
            </label>
            <button>Sign Up</button>
            <Link to="/">Sign In</Link>
        </form>
    )
}

export default SignupForm;
//needs to send axios call that posts the new user to the backend

//needs to send axios call that posts the new user to the backend

