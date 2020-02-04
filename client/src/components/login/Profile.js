import React from 'react';

const Profile = () => {

    return (
        <div className="profile-area">
            <div>Name: {state.user.name}</div>
            <div>Email: {state.user.email}</div>
            {state.user.student && <div>I'm a Student</div>}
            {state.user.staff && <div>I'm a Staff Member</div>}
        </div>
    )
}

export default Profile;