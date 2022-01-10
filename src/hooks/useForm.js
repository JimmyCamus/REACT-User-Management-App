import { useState } from "react";

const useForm = (inicial) => {
  const [form, setForm] = useState(inicial);
  const handleChange = ({target}) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const reset = () => {
      setForm(inicial);
  }
  return [form, handleChange, reset];
};


export default useForm;
