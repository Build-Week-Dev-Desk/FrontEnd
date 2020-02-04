//component shows for staff if they have any claimed tickets

import React from "react";
import Ticket from "./Ticket";

const MyTicketsStaff = props => {
  //const completeTicket = e => {
    //needs to toggle the classname of the selected item to be completed
    //also needs to make put request and update the completed prop of the item
  //};
  // map should be replaced with filter
  return(
    <main>
      <h2>Claimed Tickets</h2>
      {props.state.tickets.map(ticket => (
        <Ticket ticket={ticket} key={ticket.id}/>
      ))}
    </main>
  );
}

export default MyTicketsStaff;
