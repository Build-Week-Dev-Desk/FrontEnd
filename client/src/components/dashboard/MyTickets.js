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
           {state.map(ticket => (
        <Ticket ticket={ticket} key={ticket.id} userType={props.userType} />
      ))}
        </>
    )
}

export default MyTickets;