import React from 'react';
import MyTicketsStaff from './MyTicketsStaff';
import MyTicketsStudent from './MyTicketsStudent';

const MyTickets = props => {
    
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

    return (
        <>
            {state.user.student && <MyTicketsStudent state={state} />}
            {state.user.staff && <MyTicketsStaff state={state} />}
        </>
    )
}

export default MyTickets;

{/* if user is a student and they have studentTickets then render the studentTickets */}
{/* {state.user.student && (state.user.studentTickets.length > 0) && <MyTicketsStudent/>} */}

{/* if user is staff and they have stafftickets then render the stafftickets */}
{/* {state.user.staff && (state.user.stafftickets.length > 0) && <MyTicketsStaff/>} */}