//should have 'help student' button for employees but not students

import React, { useState } from "react";
import axiosWithAuth from "../../tools/axiosWithAuth";

//comps
import SolutionSubmitForm from "./SolutionSubmitForm";

function Ticket(props) {
  const [solving, setSolving] = useState(false);

  const claimTicket = e => {
    // needs to make put request and update the status prop of the item
    e.preventDefault();
    const reqBody = { status: "claimed" };
    axiosWithAuth()
      .put(`api/tickets/${e.target.id}`, reqBody)
      .then(res => {
        //needs to add itself to the user's staffTicket's array
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const unclaimTicket = e => {
    // needs to make put request and update the status prop of the item
    e.preventDefault();

    const reqBody = { status: "open" };
    axiosWithAuth()
      .put(`api/tickets/${e.target.id}`, reqBody)
      .then(res => {
        //needs to add itself to the user's staffTicket's array
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const completeTicket = e => {
    setSolving(true);
  };

  const deleteTicket = e => {
    e.preventDefault()
    console.log(e.target.id)
    axiosWithAuth()
      .delete(`api/tickets/${e.target.id}`)
      .then(res => {
        console.log(res)
        // props.history.push('/dashboard')
      })
      .catch(err => console.log(err))
  }
  return (
    // <div>I'm gonna be the ticket eventually</div>

    <div id="usertick" className={props.ticket.status}>
      <div className="userticket">
      <h1>{props.ticket.title}</h1>
      <p>Asked By: {props.ticket.asker}</p>
      <p>At: {props.ticket.createdAt}</p>
      <p>Status: {props.ticket.status}</p>
      <p>Description: {props.ticket.description}</p>
      <p>What's been tried: {props.ticket.attemptedSolutions}</p>
      </div>
      {props.ticket.solutions && <p>Solution: {props.ticket.solutions}</p>}
      {/* button section should only appear if user is staff */}
      <div className="button-container">
        <button id={props.ticket.id} onClick={deleteTicket}>
          Delete{" "}
        </button>
        <button id={props.ticket.id} onClick={claimTicket}>
          Claim
        </button>
        {/* unclaim and complete should only appear if ticket is claimed by current user */}
        <button id={props.ticket.id} onClick={unclaimTicket}>
          Unclaim
        </button>
        <button id={props.ticket.id} onClick={completeTicket}>
          {" "}
          Complete
        </button>
      </div>
      {solving && (
        <SolutionSubmitForm ticket={props.ticket} setSolving={setSolving} />
      )}
    </div>
  );
}

export default Ticket;
