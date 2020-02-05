import React, { useState, useEffect } from "react";
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

  // const claimTicket = e => {
  //   // needs to make put request and update the status prop of the item
  //   const filteredTickets = tickets.filter(item => {
  //     return item.id === e.target.id;
  //   });
  //   setEditTicket({ ...filteredTickets, status: "claimed" });
  //   axiosWithAuth()
  //     .put(`url/tickets/${e.target.id}`, editTicket)
  //     .then(res => {
  //       //needs to add itself to the user's staffTicket's array
  //       axiosWithAuth()
  //         .put("url", {
  //           ...state.user,
  //           staffTickets: [state.user.staffTickets, editTicket.id]
  //         })
  //         .then(res => {
  //           console.log(res);
  //         })
  //         .catch(err => {
  //           console.log(err);
  //         });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // const unclaimTicket = e => {
  //   // needs to make put request and update the status prop of the item
  //   const filteredTickets = tickets.filter(item => {
  //     return item.id === e.target.id;
  //   });
  //   setEditTicket({ ...filteredTickets, status: "open" });
  //   axiosWithAuth()
  //     .put(`url/tickets/${e.target.id}`, editTicket)
  //     .then(res => {
  //       console
  //         .log(res)
  //         //needs to add itself to the user's staffTicket's array
  //         .then(res => {
  //           //needs to remove itself from the user's staffTicket's array
  //           const newStaffTickets = [
  //             state.user.staffTickets.filter(item => {
  //               return item.id !== e.target.id;
  //             })
  //           ];
  //           axiosWithAuth()
  //             .put("url", { ...state.user, staffTickets: newStaffTickets })
  //             .then(res => {
  //               console.log(res);
  //             })
  //             .catch(err => {
  //               console.log(err);
  //             });
  //         })
  //         .catch(err => {
  //           console.log(err);
  //         });
  //     })
  //     .catch(err => console.log(err));
  // };
  
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
      <h1>Dashboard</h1>
      <div className="subnav">
        <a className="navcreate" href="/createticket">Create New Ticket</a>
      </div>
      <div>
        {tickets.map(ticket => {
          return (
            <>
              <Ticket
                // claimTicket={claimTicket}
                // unclaimTicket={unclaimTicket}
                // completeTicket={completeTicket}
                // deleteTicket={deleteTicket}
                ticket={ticket}
                key={ticket.id}
              />
              {solving && <SolutionSubmitForm ticket={editTicket} setSolving={setSolving}/>}

            </>
          );
        })}
        
      </div>
    </div>
  );
};

export default Dashboard;
