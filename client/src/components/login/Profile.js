import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../../tools/axiosWithAuth';

const Profile = props => {

    const [profile, setProfile] = useState({});

    useEffect(() => {
        if(props.user !== undefined) {
            axiosWithAuth()
            .get(`/api/users/${props.user}`)
            .then(res => {
                setProfile(res.data[0])
            })
            .catch(err => console.log(err))
        }
    }, [props.user])
    return (

        <form className="tickform">
            <h1 className="dashb">Profile</h1>
            <label>Name:<input type="text" value={profile.name} name="name"/></label>
            <label>Email:<input type="text" value={profile.email} name="email" /></label>
            {profile.role == 'student' && <div>I'm a Student</div>}
            {profile.role == 'staff' && <div>I'm a Staff Member</div>}
            {profile.role == 'both' && <div>I'm both Staff and Student Member</div>}
            <button>Update</button>
        </form>
    )
}

export default Profile;