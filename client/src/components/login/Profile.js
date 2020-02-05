import React, { useEffect } from 'react';
import axiosWithAuth from '../../tools/axiosWithAuth';

const Profile = props => {

    useEffect(() => {
        if(props.user !== undefined) {
            axiosWithAuth()
            .get(`/api/users/${props.user}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }
    }, [props.user])
    return (
        <div className="profile-area">
            {/* <div>Name: {state.user.name}</div>
            <div>Email: {state.user.email}</div>
            {state.user.student && <div>I'm a Student</div>}
            {state.user.staff && <div>I'm a Staff Member</div>} */}
        </div>
    )
}

export default Profile;