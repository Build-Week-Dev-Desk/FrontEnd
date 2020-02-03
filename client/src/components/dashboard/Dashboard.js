import React from 'react';


//components
import CreateTicketForm from './CreateTicketForm';
import TicketList from './TicketList'

const Dashboard = props => {


    return (
        
        <div>
           
        
           

            {/* if user is student render createTicketForm */}
            {/* {state.user.student && <CreateTicketForm/>} */}

            {/* render the openTicketList unconditionally */}
            <TicketList/>
        </div>
    )
}

export default Dashboard