//component shows for staff if they have any claimed tickets

import React from "react";
import Ticket from "./Ticket";

function MyTicketsStaff(props) {
  const completeTicket = e => {
    //needs to toggle the classname of the selected item to be completed
    //also needs to make put request and update the completed prop of the item
  };
  return(
    <main>
      {props.state.tickets.map(item => (
        <Ticket />
      ))}
    </main>
  );
}

export default MyTicketsStaff;
