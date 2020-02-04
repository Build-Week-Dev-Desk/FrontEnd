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
import { useForm } from 'react-hook-form';

function CreateTicketForm(props) {
    const { register, handleSubmit,  errors } = useForm();
    const [newTicket, setNewTicket ] = useState({});

    // const handleSubmit = () => {
    //     console.log(newTicket);
    //     // setup axios post call 
    //     // redirect to dashboard or myticketstudent
    // }

    // const handleChange = e => {
    //     setNewTicket({
    //         ...newTicket,
    //         [e.target.name]: e.target.value
    //     })
    // }

    const onSubmit = data => {
        setNewTicket({
            ...newTicket, ...data
        })
    }

    console.log(newTicket)

    return (
        <div>
            <h1 className="ticketsub" >Ticket Submission</h1>
            <div className='entiretick'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="ticket">
                <label htmlFor="title"><h2>Title:</h2></label>
                <input 
                id="title"
                type="text"
                name="name"
                // onChange={handleChange}
                ref={register({ required: true })}
                />
                {errors.name && errors.name.type === "required" && (<p>This is required</p>)}
                </div>
                <div className="ticket">
                <label htmlFor="description"><h3>Description:</h3></label>
                <textarea
                id="description"
                name="description"
                // onChange={handleChange}
                ref={register({ required: true })}
                />
                {errors.description && errors.description.type === "required" && (<p>This is required</p>)}
                </div>
                <div className="ticket">
                <label htmlFor="category"><h3>Category:</h3></label>
                <select name="category"  ref={register({ required: true })}>
                    <option value="">Select...</option>
                    <option value="html">Html</option>
                    <option value="css">CSS</option>
                    <option value="javascript">Javascript</option>
                    <option value="python">Python</option>
                </select>
                {errors.category && errors.category.type === "required" && (<p>This is required</p>)}
                </div>
                <div className="ticket">
                <label htmlFor="solution"><h3>What have you tried:</h3></label>
                    <textarea
                    id="solution"
                    name="solution"
                    // onChange={handleChange} 
                    ref={register({ required: true })}
                    />
                    {errors.solution && errors.solution.type === "required" && (<p>This is required</p>)}
                </div>
                <button className="submitbtn">Submit Ticket</button>              
            </form>
            </div>
        </div>
    );
}

export default CreateTicketForm;