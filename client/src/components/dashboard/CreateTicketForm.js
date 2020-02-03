//only appears for students

//sample state

// tickets: [{
//         id: num,
//         title: 'string',
//         status: 'one of [open, claimed, resolved]',
//         description: 'string',
//         attemptedSolutions: "",
//         category: 'one of [html, css, javascript, python]',
//         asker: user.name,
//         timeCreated: date,
//         solution: {
//             timeCreated: date,
//             body: 'string'
//             answerer: user.name
//         }
//     }]
//work on this with Seth


import React, { useState } from 'react';

function CreateTicketForm(props) {
    const [newTicket, setNewTicket ] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        // setup axios post call 
        // redirect to dashboard or myticketstudent
    }

    const handleChange = e => {
        setNewTicket({
            ...newTicket,
            [e.target.name]: e.target.value
        })
        console.log(newTicket);
    }

    return (
        <div>
            <h1>Ticket Submission</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:
                <input 
                id="title"
                type="text"
                name="name"
                onChange={handleChange}
                />
                </label>
                <label htmlFor="description">Description:
                <textarea
                id="description"
                name="description"
                onChange={handleChange}
                />
                </label>
                <label htmlFor="category">Category:
                <select name="category" onChange={handleChange}>
                    <option value="html">Html</option>
                    <option value="css">CSS</option>
                    <option value="javascript">Javascript</option>
                    <option value="python">Python</option>
                </select>
                </label>
                <label>What have you tried:
                    <textarea
                    id="attemptedSolution"
                    name="attemptedSolution"
                    onChange={handleChange} 
                    />
                </label>
                <button>Submit Ticket</button>              
            </form>
        </div>
    );
}

export default CreateTicketForm;