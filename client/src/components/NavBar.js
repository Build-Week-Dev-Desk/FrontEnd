import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <div>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/mytickets">My Tickets</Link>
            <Link to="/createticket">Ask For Help</Link>
        </div>
    );
}

export default NavBar;