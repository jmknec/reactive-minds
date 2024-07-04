import { useState } from "react";
import "./LoginPage.scss";
import RegisterUser from "../../components/RegisterUser/RegisterUser";
import LoginForm from "../../components/LoginForm/LoginForm";

const baseUrl = import.meta.env.VITE_API_URL;

export default function LoginPage() {
  const [isUser, setIsUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isUser)
    return (
      <RegisterUser isUser={isUser} setIsUser={setIsUser} baseUrl={baseUrl} />
    );
  if (!isLoggedIn)
    return (
      <LoginForm
        isUser={isUser}
        setIsLoggedIn={setIsLoggedIn}
        baseUrl={baseUrl}
      />
    );
}
