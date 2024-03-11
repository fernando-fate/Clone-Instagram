import { useState } from "react";

const useForm = (initialForm = {}) => {
  const [inputs, setInputs] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return {
    inputs,
    ...inputs,
    onInputChange,
  };
};

export default useForm;
