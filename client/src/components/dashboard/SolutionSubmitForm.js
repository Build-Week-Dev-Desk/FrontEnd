import React  from "react";
import { useForm } from "react-hook-form";
import axiosWithAuth from "../../tools/axiosWithAuth";

function SolutionSubmitForm(props) {
  const { register, handleSubmit, errors } = useForm();
  // const [solution, setSolution] = useState({});

  //needs to update the solution prop from null to a solution object with timeCreated,body and answerer props

  const onSubmit = data => {
    axiosWithAuth()
      .post(`api/tickets/${props.ticket.id}/solutions`, data)
      .then(res => {
        console.log(res)
        axiosWithAuth()
          .put(`api/tickets/${props.ticket.id}`, {
            status: "closed"
          })
          .then(res => {
            console.log(res);
            props.setSolving(false);
            axiosWithAuth();
          })
          .catch(err => {
            console.log(err);
            props.setSolving(false);
          });
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        ref={register({ required: true })}
        id="body"
        name="body"
        type="text"
      />
      {errors.description && errors.description.type === "required" && (
        <p>This is required</p>
      )}
      <input type="submit" />
    </form>
  );
}

export default SolutionSubmitForm;
