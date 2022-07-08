import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [valueInput, setValueInput] = useState(initialForm);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setValueInput({
      ...valueInput,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setValueInput(initialForm);
  };

  return { handleInputChange, onResetForm };
};
