import React, { useEffect, useState } from "react";
import axiosWithAuth from "../../tools/axiosWithAuth";
import { useForm } from "react-hook-form";
import "./Profile.scss";

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
        console.log(res);
        setEditing(false);
        setProfile(res.data[0]);
      })
      .catch(err => console.log(err));
  };
  return editing ? (
    <div className="profileform">
      <h1 className="dashb">Profile</h1>
      <div className="proform">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <h3>Name:</h3>
            <input
              type="text"
              placeholder={profile.name}
              name="name"
              ref={register({ required: true })}
            />
          </label>
          <label>
            <h3>Email:</h3>
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
          <input className="submitbtn" type="submit" />
          <button
            onClick={() => {
              setEditing(false);
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div className="profileform">
      <h1 className="dashb">Profile</h1>
      <div className="proform">
        <h2>Name: {profile.name}</h2>
        <h2>Email: {profile.email}</h2>
        {profile.role === "student" && <div>I'm a Student</div>}
        {profile.role === "staff" && <div>I'm a Staff Member</div>}
        {profile.role === "both" && (
          <div>I'm both a Staff Member and Student</div>
        )}
        <button
          id="edit-profile"
          className="btn btn-primary"
          onClick={() => {
            setEditing(true);
          }}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
