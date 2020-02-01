import react from 'react';


//components
import CreateTicketForm from './CreateTicketForm';
import MyTicketsStaff from './MyTicketsStaff';
import MyTicketsStudent from './MyTicketsStudent';
import OpenTicketList from './OpenTicketList'

const Dashboard = props => {


    return (
        
        <div>
            {/* if user is a student and they have studentTickets then render the studentTickets */}
            {props.user.student && (state.user.studentTickets.length > 0) && <MyTicketsStudent/>}
    
            {/* if user is staff and they have stafftickets then render the stafftickets */}
            {props.user.staff && (state.user.stafftickets.length > 0) && <MyTicketsStaff/>}

            {/* if user is student render createTicketForm */}
            {props.user.student && <CreateTicketForm/>}

            {/* render the openTicketList unconditionally */}
            <OpenTicketList/>
        </div>
    )
}