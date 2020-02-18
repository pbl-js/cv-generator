import { useState, useEffect } from "react";

const useForm = (defaultData, callback, validate) => {
  const [values, setValues] = useState(defaultData);
  const [errors, setErrors] = useState({});
  const [isSubmiting, setIsSubmiting] = useState(false);

  //UseEffect trigger submit function. Submit button in other part of application only change state for :"isSubmitting"
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmiting) {
      callback();
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
    setIsSubmiting(true);
  };

  return {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;
