import { useState } from "react";

const useForm = (initialState) => {
  const [values, setValue] = useState(initialState);

  // Function for managing changes to form field values
  const handleInputChange = (event) => {
    // Extracts the name and value of the field that triggered the event
    const { name, value } = event.target;
    // Update the status of form values
    setValue({
      ...values,
      [name]: value,
    });
  };

  // Returns an array containing the current values and the change management function
  return [values, handleInputChange];
};

export default useForm;
