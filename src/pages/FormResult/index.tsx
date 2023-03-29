import React from "react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const Display = ({ name, email, message }: FormValues) => {
  return (
    <div>
      <h2>Entered Data</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </div>
  );
};

export default Display;
