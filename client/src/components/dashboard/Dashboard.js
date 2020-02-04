import React, {useState} from "react";
import axios from "axios";


//components
import Ticket from "./Ticket";

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
  const [tickets, setTickets] = useState([])
  const [editTicket, setEditTicket] = useState({})
  
  // useEffect(() => {
  //   axios
  //     .get('url')
  //     .then(res => {
  //       setTicket(res.data)
  //     })
  //     .catch(err => console.log(err))
  // }, [])
  const claimTicket = (e) => {
  //   //needs to add itself to the user's staffTicket's array
  //   //also needs to make put request and update the claimed prop of the item

  //   const filteredTickets = tickets.filter(item => {
  //     return item.id === e.target.id
  //   })

  //   setEditTicket({...filteredTickets, status: 'claimed'})
  //   axiosWithAuth().put(`url/tickets/${e.target.id}`, editTicket)
  //     .then(res => {
  //       axiosWithAuth().put('url', {...user, staffTickets: [user.staffTickets, editTicket.id]})
  //         .then (res => {
  //           console.log(res)
  //         })
  //         .catch(err => {
  //           console.log(err)
  //         })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
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
    <div>
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
            />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
