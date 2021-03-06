import React, { useState } from "react";

import { useHistory, useLocation } from "react-router-dom";
import axiosWithAuth from "../../tools/axiosWithAuth";

//comps
import SolutionSubmitForm from "./SolutionSubmitForm";

const Ticket = props => {
  const [solving, setSolving] = useState(false);
  let history = useHistory();
  let location = useLocation();
  const claimTicket = e => {
    // needs to make put request and update the status prop of the item
    e.preventDefault();
    const reqBody = { status: "claimed" };
    axiosWithAuth()
      .put(`api/tickets/${e.target.id}`, reqBody)
      .then(res => {
        //needs to add itself to the user's staffTicket's array
        history.push("/mytickets");
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
        history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const completeTicket = e => {
    setSolving(true);
  };
  const deleteTicket = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`api/tickets/${e.target.id}`)
      .then(res => {
        if (location.pathname === "/dashboard") {
          document.location.reload();
        } else {
          history.push("/dashboard");
        }
      })
      .catch(err => console.log(err));
  };
  return (
    <div className="cards">
      <div id="usertick" className={props.ticket.status}>
        <div className="userticket">
          <h1>{props.ticket.title}</h1>
          <p>Asked By: {props.ticket.asker}</p>
          <p>At: {props.ticket.createdAt}</p>
          <p>Status: {props.ticket.status}</p>
          <p>Description: {props.ticket.description}</p>
          <p>What's been tried: {props.ticket.attemptedSolutions}</p>
        </div>
        {props.ticket.solution != null && (
          <p className="ticksolut">
            Solution by {props.ticket.solution.answerer}:{" "}
            {props.ticket.solution.body}
          </p>
        )}
        {/* button section should only appear if user is staff */}
        <div className="button-container">
          {props.userType === "both" && (
            <>
              <button
                id={props.ticket.id}
                className="btn btn-danger"
                onClick={deleteTicket}
              >
                Delete{" "}
              </button>
              {props.ticket.status === "open" && (
                <button
                  id={props.ticket.id}
                  className="btn btn-primary"
                  onClick={claimTicket}
                >
                  Claim
                </button>
              )}
              {location.pathname === "/mytickets" && (
                <>
                  <button
                    id={props.ticket.id}
                    className="btn btn-secondary"
                    onClick={unclaimTicket}
                  >
                    Unclaim
                  </button>
                  <button
                    id={props.ticket.id}
                    className="btn btn-success"
                    onClick={completeTicket}
                  >
                    {" "}
                    Complete
                  </button>
                </>
              )}
            </>
          )}

          {props.userType === "staff" && (
            <>
              <button
                id={props.ticket.id}
                className="btn btn-danger"
                onClick={deleteTicket}
              >
                Delete{" "}
              </button>
              {props.ticket.status === "open" && (
                <button
                  id={props.ticket.id}
                  className="btn btn-primary"
                  onClick={claimTicket}
                >
                  Claim
                </button>
              )}
              {location.pathname === "/mytickets" && (
                <>
                  <button
                    id={props.ticket.id}
                    className="btn btn-secondary"
                    onClick={unclaimTicket}
                  >
                    Unclaim
                  </button>
                  <button
                    id={props.ticket.id}
                    className="btn btn-success"
                    onClick={completeTicket}
                  >
                    {" "}
                    Complete
                  </button>
                </>
              )}
            </>
          )}
        </div>
        {solving && (
          <SolutionSubmitForm ticket={props.ticket} setSolving={setSolving} />
        )}
      </div>
    </div>
  );
};

export default Ticket;
