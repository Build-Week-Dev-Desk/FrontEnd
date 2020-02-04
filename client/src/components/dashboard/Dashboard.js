import React, { useState, useEffect, useContext } from "react";
import axiosWithAuth from "../../tools/axiosWithAuth";


//components
import Ticket from "./Ticket";
import SolutionSubmitForm from "./SolutionSubmitForm";

//this needs to be taken out once there is a backend
const state = {
  user: {
    id: 16,
    student: true,
    staff: true,
    staffTickets: [],
    studentTickets: [],
    email: "myemail@email.com",
    name: "Mr. smarty pants",
    timeCreated: 123
  },
  tickets: [
    {
      id: 16,
      title: "Im a big problem",
      status: "open",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
      attemptedSolutions: "I tried a whole buncha stuff man",
      category: "html",
      asker: "jeffrey real confused",
      timeCreated: 213,
      solution: null
    },
    {
      id: 13,
      title: "Im a second problem",
      status: "closed",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
      attemptedSolutions: "I tried even more things ",
      category: "css",
      asker: "jeffrey real confused",
      timeCreated: 213,
      solution: {
        timeCreated: 92,
        body: "I solved this problem with my brain",
        answerer: "smarty pants guy"
      }
    }
  ]
};

const Dashboard = props => {
  const [tickets, setTickets] = useState([]);
  const [editTicket, setEditTicket] = useState({});
  const [solving, setSolving] = useState(false);

  useEffect(() => {
    axiosWithAuth()
      .get("https://bwdevdesk.herokuapp.com/api/tickets")
      .then(res => {
        console.log(res);
        setTickets(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const claimTicket = e => {
    // needs to make put request and update the status prop of the item
    const filteredTickets = tickets.filter(item => {
      return item.id === e.target.id;
    });
    setEditTicket({ ...filteredTickets, status: "claimed" });
    axiosWithAuth()
      .put(`url/tickets/${e.target.id}`, editTicket)
      .then(res => {
        //needs to add itself to the user's staffTicket's array
        axiosWithAuth()
          .put("url", {
            ...state.user,
            staffTickets: [state.user.staffTickets, editTicket.id]
          })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const unclaimTicket = e => {
    // needs to make put request and update the status prop of the item
    const filteredTickets = tickets.filter(item => {
      return item.id === e.target.id;
    });
    setEditTicket({ ...filteredTickets, status: "open" });
    axiosWithAuth()
      .put(`url/tickets/${e.target.id}`, editTicket)
      .then(res => {
        console
          .log(res)
          //needs to add itself to the user's staffTicket's array
          .then(res => {
            //needs to remove itself from the user's staffTicket's array
            const newStaffTickets = [
              state.user.staffTickets.filter(item => {
                return item.id !== e.target.id;
              })
            ];
            axiosWithAuth()
              .put("url", { ...state.user, staffTickets: newStaffTickets })
              .then(res => {
                console.log(res);
              })
              .catch(err => {
                console.log(err);
              });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => console.log(err));
  };
  
  const completeTicket = e => {
     
    // needs to make put request and update the status prop of the item
    const filteredTickets = tickets.filter(item => {
      return item.id === e.target.id;
    });
    setEditTicket({ ...filteredTickets, status: "open" });

    
    //needs to render the solution form with ticket, user, and setSolving props 
    setSolving(true);
  };

  const deleteTicket = () => {
    //needs to make axios call and delete ticket from backend
  };

  return (
    <div>
      <div className="subnav">
        <a className="navcreate" href="/createticket">Create New Ticket</a>
      </div>
      <div className="profile-area">
        <div>Name: {state.user.name}</div>
        <div>Email: {state.user.email}</div>
        {state.user.student && <div>I'm a Student</div>}
        {state.user.staff && <div>I'm a Staff Member</div>}
      </div>
      <div>
        {state.tickets.map(ticket => {
          return (
            <>

              I'm the dashboard
              <Ticket
                claimTicket={claimTicket}
                unclaimTicket={unclaimTicket}
                completeTicket={completeTicket}
                deleteTicket={deleteTicket}
                ticket={ticket}
      key={ticket.id}
              />
              {solving && <SolutionSubmitForm ticket={editTicket} user={state.user} setSolving={setSolving}/>}

            </>
          );
        })}
        
      </div>
    </div>
  );
};

export default Dashboard;
