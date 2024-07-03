import axios from "axios";
import "./Login.scss";
import UserAccountForm from "../UserAccountForm/UserAccountForm";

export default function Login({ isUser, setIsLoggedIn, baseUrl }) {
  const loginUrl = `${baseUrl}/users/login`;
  const initialValues = { email: "", password: "" };
  const loginUser = async (values) => {
    try {
      const loginResponse = await axios.post(`${loginUrl}`, values);
      setIsLoggedIn(true);
      return loginResponse;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="login-form">
      <UserAccountForm
        isUser={isUser}
        onSubmit={loginUser}
        initialValues={initialValues}
      />
    </section>
  );
}
