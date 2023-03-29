import React from "react";
import { useState } from "react";
import Form from "../../components/common/Form";
import Display from "../FormResult";

type FormValues = {
  name: string;
  email: string;
  message: string;
};
const ParentForm = () => {
  const [formData, setFormData] = useState<FormValues | null>(null);

  const handleFormSubmit = (data: FormValues) => {
    setFormData(data);
  };

  return (
    <div>
      <h1>Form</h1>
      <Form onFormSubmit={handleFormSubmit} />
      {formData && (
        <Display
          name={formData.name}
          email={formData.email}
          message={formData.message}
        />
      )}
    </div>
  );
};

export default ParentForm;
