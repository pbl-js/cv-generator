import { useState, useEffect } from "react";

const useForm = (defaultData, callback, validate) => {
  const [values, setValues] = useState(defaultData);
  const [errors, setErrors] = useState({});
  const [canSubmiting, setCanSubmiting] = useState(false);

  useEffect(() => {
    const noErrors = Object.keys(errors).length === 0;

    if (noErrors) {
      setCanSubmiting(true);
    } else {
      setCanSubmiting(false);
    }
  }, [errors]);

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleBlur = e => {
    e.preventDefault();

    const validateError = validate(values);
    console.log(validateError);
    setErrors({
      ...errors,
      [e.target.name]: validateError[e.target.name]
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    callback();
  };

  return {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    canSubmiting
  };
};

export default useForm;
