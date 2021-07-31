import { useState } from "react";

export default function useForm(initialFormValues, validateInfo) {
  const [form, setForm] = useState(initialFormValues);

  const [errors, setErrors] = useState({});

  return { form, setForm, errors, setErrors };
}
