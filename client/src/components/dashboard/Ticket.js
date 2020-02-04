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

  return (
    // <div>I'm gonna be the ticket eventually</div>

    <div className={props.ticket.status}>
      <h1>{props.ticket.title}</h1>
      <p>Asked By: {props.ticket.asker}</p>
      <p>At: {props.ticket.createdAt}</p>
      <p>Status: {props.ticket.status}</p>
      <p>Description: {props.ticket.description}</p>
      <p>What's been tried: {props.ticket.attemptedSolutions}</p>
      {props.ticket.solution && (
        <div className="solution">
          <p>Solved by: {props.ticket.solution.answerer}</p>
          <p>At: {props.ticket.solution.timeCreated}</p>
          <p>Solution: {props.ticket.solution.body}</p>
        </div>
      )}
      {/* button section should only appear if user is staff */}
      <div className="button-container">
        <button id={props.ticket.id} onClick={props.deleteTicket}>Delete </button>
        <button id={props.ticket.id} onClick={props.claimTicket}>Claim</button>
        {/* unclaim and complete should only appear if ticket is claimed by current user */}
        <button id={props.ticket.id} onClick={props.unclaimTicket}>Unclaim</button>
        <button id={props.ticket.id} onClick={props.completeTicket}> Complete</button>
      </div>
    </div>
  );
}

export default Ticket;
