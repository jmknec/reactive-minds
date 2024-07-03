import axios from "axios";
import "./RegisterUser.scss";
import UserAccountForm from "../UserAccountForm/UserAccountForm";

const baseUrl = import.meta.env.VITE_API_URL;
const registerUrl = `${baseUrl}/users/register`;

export default function RegisterUser({ setIsUser }) {
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
      <UserAccountForm onSubmit={addUser} initialValues={initialValues} />
    </section>
  );
}
