import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axiosWithAuth from "../../tools/axiosWithAuth"; 

function SolutionSubmitForm(props) {
  const { register, handleSubmit, errors } = useForm();
  const [solution, setSolution] = useState({});

//needs to update the solution prop from null to a solution object with timeCreated,body and answerer props

  const handleChange = e => {
    setSolution({
      body: e.target.value,
      id: Date.now(),
      answerer: props.user
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`url/tickets/${e.target.id}`, {
        ...props.ticket.id,
        solution: solution
      })
      .then(res => {
        console.log(res)
        props.setSolving(false);
      })
      .catch(err => {
        console.log(err)
        props.setSolving(false);
      });
  };
  return (
    <form>
      <input
        ref={register({ required: true })}
        id="body"
        name="body"
        type="text"
      />
      {errors.description && errors.description.type === "required" && (
        <p>This is required</p>
      )}
      <button type="submit" onClick={onSubmit}>Submit the answer!</button>
    </form>
  );
}

export default SolutionSubmitForm;
