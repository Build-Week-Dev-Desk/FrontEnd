//component shows for students if they have any created tickets

import React from 'react';

import Ticket from './Ticket'

const MyTicketsStudent = props => {
    return (
        <main>
            <h1 className="claimedtick">My Tickets</h1>
            {props.state.tickets.map(ticket => (
                <Ticket ticket={ticket} key={ticket.id}/>
            ))}
        </main>
    );
}

export default MyTicketsStudent;