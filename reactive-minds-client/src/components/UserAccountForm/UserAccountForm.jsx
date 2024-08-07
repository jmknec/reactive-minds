import { useState } from "react";
import "./UserAccountForm.scss";
import FormInput from "../FormInput/FormInput";

export default function UserAccountForm({
  isUser,
  initialValues,
  onSubmit,
  buttonLabel,
}) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FormInput
        fieldClass="form__field"
        htmlFor="email"
        label="Email"
        id="email"
        name="email"
        placeholder="Please enter your email address"
        onChange={handleChange}
        value={values.email}
      />
      <FormInput
        fieldClass={`form__field ${isUser ? "form__field--hidden" : ""}`}
        htmlFor="username"
        label="Username"
        id="username"
        name="username"
        placeholder="Please enter a username"
        onChange={handleChange}
        value={values.username}
      />
      <FormInput
        fieldClass="form__field"
        htmlFor="password"
        label="Password"
        id="password"
        name="password"
        placeholder="Please enter a password"
        onChange={handleChange}
        value={values.password}
      />
      <FormInput
        fieldClass={`form__field ${isUser ? "form__field--hidden" : ""}`}
        htmlFor="confirm"
        label="Confirm Password"
        id="confirm"
        name="confirm"
        placeholder="Please confirm your password"
        onChange={handleChange}
        value={values.confirm}
      />
      <button className="form__register">{buttonLabel}</button>
    </form>
  );
}
