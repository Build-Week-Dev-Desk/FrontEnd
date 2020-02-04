import React, { useState } from "react";
import { useForm } from "react-hook-form";

function SolutionSubmitForm(props) {
  const { register, handleSubmit, errors } = useForm();
  const [solution, setSolution] = useState({});

//   const handleChange = e => {
//     setSolution({
//       body: e.target.value,
//       id: Date.now(),
//       answerer: props.user
//     });
//   };
//   const handleSubmit = e => {
//     e.preventDefault();
//     axiosWithAuth()
//       .put(`url/tickets/${e.target.id}`, {
//         ...props.ticket.id,
//         solution: solution
//       })
    //   .then(res => {
    //     console.log(res)
    //     props.setSolving(false);
    //   })
//       .catch(err => console.log(err));
//   };
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default SolutionSubmitForm;
