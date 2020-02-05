import React, {useEffect, useState} from 'react';
import Ticket from './Ticket'

import axiosWithAuth from "../../tools/axiosWithAuth";

const MyTickets = props => {
        const [state, setState] = useState([])
    useEffect(() => {
        axiosWithAuth()
            .get('api/mytickets')
            .then(res=> {
                console.log(res)
                setState(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
        <div className="subnav">
        <h1 className="dashb">My Tickets</h1>
            <a className="navcreate" href="/createticket">Create New Ticket</a>
        </div>
           {state.map(ticket => (
        <Ticket ticket={ticket} key={ticket.id} userType={props.userType} />
      ))}
        </>
    )
}

export default MyTickets;