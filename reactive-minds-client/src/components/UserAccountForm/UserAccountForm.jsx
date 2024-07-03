import "./UserAccountForm.scss";
import FormInput from "../FormInput/FormInput";

export default function UserAccountForm(props) {
  return (
    <form className="form">
      <FormInput
        htmlFor="email"
        label="Email"
        id="email"
        name="email"
        placeholder="Please enter your email address"
        value=""
      />
      <FormInput
        htmlFor="username"
        label="Username"
        id="username"
        name="username"
        placeholder="Please enter a username"
        value=""
      />
      <FormInput
        htmlFor="password"
        label="Password"
        id="password"
        name="password"
        placeholder="Please enter a password"
        value=""
      />
      <FormInput
        htmlFor="confirm"
        label="Confirm Password"
        id="confirm"
        name="confirm"
        placeholder="Please confirm your password"
        value=""
      />
      <button className="form__register">Register</button>
    </form>
  );
}
