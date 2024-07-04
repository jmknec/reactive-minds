import { useContext } from "react";
import axios from "axios";
import "./LoginForm.scss";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import UserAccountForm from "../UserAccountForm/UserAccountForm";

export default function Login({ baseUrl }) {
  const loginUrl = `${baseUrl}/users/login`;
  const initialValues = { email: "", password: "" };
  const { setCurrentUser } = useContext(CurrentUserContext);
  const loginUser = async (values) => {
    try {
      const loginResponse = await axios.post(`${loginUrl}`, values);
      setCurrentUser(loginResponse);
      return loginResponse;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="login-form">
      <UserAccountForm
        onSubmit={loginUser}
        initialValues={initialValues}
        buttonLabel="Sign in"
      />
    </section>
  );
}
