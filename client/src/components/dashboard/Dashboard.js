import React, { useState, useEffect, useContext } from "react";
import axiosWithAuth from "../../tools/axiosWithAuth";


//components
import Ticket from "./Ticket";
import SolutionSubmitForm from "./SolutionSubmitForm";

const Dashboard = props => {
  const [tickets, setTickets] = useState([]);
  const [editTicket, setEditTicket] = useState({});
  const [solving, setSolving] = useState(false);

  useEffect(() => {
    axiosWithAuth()
      .get("https://bwdevdesk.herokuapp.com/api/tickets")
      .then(res => {
        console.log('im an axios call that actually happens and works');
        setTickets(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  
  // const completeTicket = e => {
     
  //   // needs to make put request and update the status prop of the item
  //   const filteredTickets = tickets.filter(item => {
  //     return item.id === e.target.id;
  //   });
  //   setEditTicket({ ...filteredTickets, status: "open" });

    
  //   //needs to render the solution form with ticket, user, and setSolving props 
  //   setSolving(true);
  // };

  // const deleteTicket = () => {
  //   //needs to make axios call and delete ticket from backend
  // };

  return (
    <div>
      <h1 className="dashb">Dashboard</h1>
      <div className="subnav">
        <a className="navcreate" href="/createticket">Create New Ticket</a>
      </div>
      <div>
        {tickets.map(ticket => {
          return (
            <>
              <Ticket
               
                history={props.history}
                ticket={ticket}
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
