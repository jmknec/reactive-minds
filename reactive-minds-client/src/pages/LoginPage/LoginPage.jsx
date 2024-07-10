import { useContext, useState } from "react";
import "./LoginPage.scss";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import RegisterUser from "../../components/RegisterUser/RegisterUser";
import LoginForm from "../../components/LoginForm/LoginForm";

const baseUrl = import.meta.env.VITE_API_URL;

export default function LoginPage() {
  const { currentUser } = useContext(CurrentUserContext);

  if (currentUser == null) {
    return <LoginForm baseUrl={baseUrl}></LoginForm>;
  } else {
    return <h2>You're already logged in.</h2>;
  }
}
