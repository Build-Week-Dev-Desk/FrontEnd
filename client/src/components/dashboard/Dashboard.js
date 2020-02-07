import React, { useState, useEffect, Fragment } from "react";
import axiosWithAuth from "../../tools/axiosWithAuth";

//components
import Ticket from "./Ticket";

import "./Dashboard.scss";

const Dashboard = props => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("https://bwdevdesk.herokuapp.com/api/tickets")
      .then(res => {
        setTickets(res.data);
      })
      .catch(err => console.log(err));
  }, [setTickets]);

  return (
    <div className="dashboard">
      <h1 className="dashb">Dashboard</h1>
      <div className="subnav">
        <button
          id="create-ticket"
          className="btn btn-primary"
          onClick={() => props.history.push("/createticket")}
        >
          Create New Ticket
        </button>
      </div>
      <div>
        {tickets.map(ticket => {
          return (
            <Fragment key={ticket.id}>
              <Ticket
                ticket={ticket}
                setTickets={setTickets}
                userType={props.userType}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
