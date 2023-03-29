import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormProps = {
  onFormSubmit: (data: FormValues) => void;
};

const Form = (props: FormProps) => {
  const { onFormSubmit } = props;
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data);
  });

  return (
    <form className="wrapper" onSubmit={onSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        className="wrapper__input"
        type="text"
        id="name"
        {...register("name")}
      />

      <br />
      <label>
        Email:
        <input className="wrapper__input" type="email" {...register("email")} />
      </label>
      <br />
      <label>
        Message:
        <textarea className="wrapper__input" {...register("message")} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
