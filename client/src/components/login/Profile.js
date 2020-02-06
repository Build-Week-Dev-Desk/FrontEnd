import React, { useEffect, useState } from "react";
import axiosWithAuth from "../../tools/axiosWithAuth";
import { useForm } from "react-hook-form";

const Profile = props => {
  const { register, handleSubmit, errors } = useForm();
  const [profile, setProfile] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (props.user !== undefined) {
      axiosWithAuth()
        .get(`/api/users/${props.user}`)
        .then(res => {
          setProfile(res.data[0]);
        })
        .catch(err => console.log(err));
    }
  }, [props.user]);

  const onSubmit = data => {
      axiosWithAuth()
      .put(`/api/users/${props.user}`, data)
      .then(res => {
          console.log(res)
          setEditing(false)
          setProfile(res.data[0]);
      })
      .catch(err => console.log(err))
  };


  return (editing ? (<form onSubmit={handleSubmit(onSubmit)} className="tickform">
          <h1 className="dashb">Profile</h1>
          <label>
            Name:
            <input
              type="text"
              placeholder={profile.name}
              name="name"
              ref={register({ required: true })}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              placeholder={profile.email}
              name="email"
              ref={register({ required: true })}
            />
          </label>
          <select name="role" ref={register}>
            <option value="student">Student</option>
            <option value="staff">Staff</option>
            <option value="both">Both</option>
          </select>
          <input type="submit" />
        </form>) : (<div>
          <h1 className="dashb">Profile</h1>
          <h2>Name: {profile.name}</h2>
          <h2>Email: {profile.email}</h2>
          {profile.role == "student" && <div>I'm a Student</div>}
          {profile.role == "staff" && <div>I'm a Staff Member</div>}
          {profile.role == "both" && (
            <div>I'm both a Staff Member and Student</div>
          )}
          <button onClick={() => {setEditing(true)}}>Edit Profile</button>
        </div>));
};

export default Profile;




