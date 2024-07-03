import axios from "axios";
import "./RegisterUser.scss";
import UserAccountForm from "../UserAccountForm/UserAccountForm";

export default function RegisterUser({ isUser, setIsUser, baseUrl }) {
  const registerUrl = `${baseUrl}/users/register`;
  const initialValues = { email: "", username: "", password: "", confirm: "" };
  const addUser = async (values) => {
    try {
      const userResponse = await axios.post(`${registerUrl}`, values);
      setIsUser(true);
      return userResponse;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="registration-form">
      <UserAccountForm
        isUser={isUser}
        onSubmit={addUser}
        initialValues={initialValues}
      />
    </section>
  );
}
