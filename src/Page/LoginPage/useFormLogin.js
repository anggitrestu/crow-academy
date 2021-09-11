import { useState } from 'react';

const useFormLogin = (validate) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    loginas: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
  };
  return { handleChange, values, handleSubmit, errors };
};

export default useFormLogin;
