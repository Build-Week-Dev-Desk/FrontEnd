import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../tools/axiosWithAuth";

//components
import Ticket from "./Ticket";

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
    <div>
      <h1 className="dashb">Dashboard</h1>
      <div className="subnav">
        <button
          className="navcreate green"
          onClick={() => props.history.push("/createticket")}
        >
          Create New Ticket
        </button>
      </div>
      <div>
        {tickets.map(ticket => {
          return (
            <>
              <Ticket
                ticket={ticket}
                setTickets={setTickets}
                userType={props.userType}
                key={ticket.id}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
