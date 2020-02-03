//should have 'help student' button for employees but not students

import React from "react";

function Ticket(props) {
  //state ticket

  // {
  //     id: num,
  //     title: 'string',
  //     status: 'one of [open, claimed, resolved]',
  //     description: 'string',
  //     attemptedSolutions: 'string',
  //     category: 'one of [html, css, javascript, python]',
  //     asker: user.name,
  //     timeCreated: date,
  //     solution: {
  //         timeCreated: date,
  //         body: 'string'
  //         answerer: user.name
  //     }
  // }

  const claimTicket = e => {
    //needs to toggle the classname of the selected item to be claimed
    //needs to add itself to the user's staffTicket's array
    //also needs to make put request and update the claimed prop of the item
  };
  const unclaimTicket = e => {
    //needs to toggle the classname of the selected item to be open
    //needs to remove itself from the user's staffTicket's array
    //also needs to make put request and update the claimed prop of the item
  };
  const completeTicket = () => {
    //needs to toggle the classname of the selected item to be completed
    //needs to update the solution prop from null to a solution object with timeCreated,body and answerer props
  };

  const deleteTicket = () => {
    //needs to make axios call and delete ticket from backend
  };
  return (
    <div>I'm gonna be the ticket eventually</div>

    // <div className="ticket">
    //   <h1>Problem: {state.ticket.title}</h1>
    //   <p>Asked By: {state.ticket.asker}</p>
    //   <p>At: {state.ticket.timeCreated}</p>
    //   <p>Status: {state.ticket.status}</p>
    //   <p>Description: {state.ticket.description}</p>
    //   <p>What's been tried: {state.ticket.attemptedSolutions}</p>
    //   {state.ticket.solution && (
    //     <div className="solution">
    //       <p>Solved by: {state.ticket.solution.answerer}</p>
    //       <p>At: {state.ticket.solution.timeCreated}</p>
    //       <p>Solution: {state.ticket.solution.body}</p>
    //     </div>
    //   )}
    //   {/* button section should only appear if user is staff */}
    //   <div className="button-container">
    //     <button onClick={deleteTicket}>Delete </button>
    //     <button onClick={claimTicket}>Claim</button>
    //     {/* unclaim and complete should only appear if ticket is claimed by current user */}
    //     <button onClick={unclaimTicket}>Unclaim</button>
    //     <button onClick={completeTicket}> Complete</button>
    //   </div>
    // </div>
  );
}

export default Ticket;
