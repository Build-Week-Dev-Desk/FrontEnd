import React from 'react';


//components
import CreateTicketForm from './CreateTicketForm';
import MyTicketsStaff from './MyTicketsStaff';
import MyTicketsStudent from './MyTicketsStudent';
import TicketList from './TicketList'

const Dashboard = props => {


    return (
        
        <div>
            <MyTicketsStudent/>
            <MyTicketsStaff/>
            <CreateTicketForm/>
        
            {/* if user is a student and they have studentTickets then render the studentTickets */}
            {/* {state.user.student && (state.user.studentTickets.length > 0) && <MyTicketsStudent/>} */}
    
            {/* if user is staff and they have stafftickets then render the stafftickets */}
            {/* {state.user.staff && (state.user.stafftickets.length > 0) && <MyTicketsStaff/>} */}

            {/* if user is student render createTicketForm */}
            {/* {state.user.student && <CreateTicketForm/>} */}

            {/* render the openTicketList unconditionally */}
            <TicketList/>
        </div>
    )
}

export default Dashboard