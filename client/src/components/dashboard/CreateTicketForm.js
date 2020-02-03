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
            <h1>Ticket Submission</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="title">Title:
                <input 
                id="title"
                type="text"
                name="name"
                // onChange={handleChange}
                ref={register({ required: true })}
                />
                {errors.name && errors.name.type === "required" && (<p>This is required</p>)}
                </label>
                <label htmlFor="description">Description:
                <textarea
                id="description"
                name="description"
                // onChange={handleChange}
                ref={register({ required: true })}
                />
                {errors.description && errors.description.type === "required" && (<p>This is required</p>)}
                </label>
                <label htmlFor="category">Category:
                <select name="category"  ref={register({ required: true })}>
                    <option value="">Select...</option>
                    <option value="html">Html</option>
                    <option value="css">CSS</option>
                    <option value="javascript">Javascript</option>
                    <option value="python">Python</option>
                </select>
                {errors.category && errors.category.type === "required" && (<p>This is required</p>)}
                </label>
                <label>What have you tried:
                    <textarea
                    id="attemptedSolution"
                    name="attemptedSolution"
                    // onChange={handleChange} 
                    ref={register({ required: true })}
                    />
                    {errors.attemptedSolution && errors.attemptedSolution === "required" && (<p>This is required</p>)}
                </label>
                <button>Submit Ticket</button>              
            </form>
        </div>
    );
}

export default CreateTicketForm;