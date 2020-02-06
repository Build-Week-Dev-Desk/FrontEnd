import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axiosWithAuth from "../../tools/axiosWithAuth";

function CreateTicketForm(props) {
  const { register, handleSubmit, errors } = useForm();
  const [newTicket, setNewTicket] = useState({});

  const onSubmit = data => {
    setNewTicket({
      ...data,
      status: "open"
    });
    props.history.push('/dashboard')
  };

  useEffect(() => {
    if (newTicket.title) {
      axiosWithAuth()
        .post("api/tickets", newTicket)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [newTicket]);

  return (
    <div className="tickform">
      <h1 className="dashb">Create New Ticket</h1>
      <div className="createtick">
        <div className="entiretick">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="ticket">
              <label htmlFor="title">
                <h2>Title:</h2>
              </label>
              <input
                id="title"
                type="text"
                name="title"
                // onChange={handleChange}
                ref={register({ required: true })}
              />
              {errors.name && errors.name.type === "required" && (
                <p>This is required</p>
              )}
            </div>
            <div className="ticket">
              <label htmlFor="description">
                <h3>Description:</h3>
              </label>
              <textarea
                id="description"
                name="description"
                // onChange={handleChange}
                ref={register({ required: true })}
              />
              {errors.description && errors.description.type === "required" && (
                <p>This is required</p>
              )}
            </div>
            <div className="ticket">
              <label htmlFor="category">
                <h3>Category:</h3>
              </label>
              <select name="category" ref={register({ required: true })}>
                <option value="">Select...</option>
                <option value="html">Html</option>
                <option value="css">CSS</option>
                <option value="javascript">Javascript</option>
                <option value="python">Python</option>
              </select>
              {errors.category && errors.category.type === "required" && (
                <p>This is required</p>
              )}
            </div>
            <div className="ticket">
              <label htmlFor="attemptedSolutions">
                <h3>What have you tried:</h3>
              </label>
              <textarea
                id="attemptedSolutions"
                name="attemptedSolutions"
                // onChange={handleChange}
                ref={register({ required: true })}
              />
              {errors.solutions && errors.solutions.type === "required" && (
                <p>This is required</p>
              )}
            </div>
            <button className="submitbtn green">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTicketForm;
