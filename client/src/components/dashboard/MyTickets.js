import React, { useEffect, useState } from "react";
import Ticket from "./Ticket";

import axiosWithAuth from "../../tools/axiosWithAuth";

const MyTickets = props => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("api/mytickets")
      .then(res => {
        setState(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div className="subnav">
        <h1 className="dashb">My Tickets</h1>
        <button
          id="create-ticket"
          className="btn btn-primary"
          onClick={() => props.history.push("/createticket")}
        >
          Create New Ticket
        </button>
      </div>
      {state.map(ticket => (
        <Ticket ticket={ticket} key={ticket.id} userType={props.userType} />
      ))}
    </>
  );
};

export default MyTickets;
