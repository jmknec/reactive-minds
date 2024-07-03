import { useState } from "react";
import "./UserPage.scss";
import RegisterUser from "../../components/RegisterUser/RegisterUser";
import Login from "../../components/Login/Login";

const baseUrl = import.meta.env.VITE_API_URL;

export default function UserPage() {
  const [isUser, setIsUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isUser)
    return (
      <RegisterUser isUser={isUser} setIsUser={setIsUser} baseUrl={baseUrl} />
    );
  if (!isLoggedIn)
    return (
      <Login isUser={isUser} setIsLoggedIn={setIsLoggedIn} baseUrl={baseUrl} />
    );

  return <h2>logged in</h2>;
}
