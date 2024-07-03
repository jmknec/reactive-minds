import { useState } from "react";
import "./UserPage.scss";
import RegisterUser from "../../components/RegisterUser/RegisterUser";

export default function UserPage() {
  const [isUser, setIsUser] = useState(false);

  if (!isUser) return <RegisterUser setIsUser={setIsUser} />;

  return <h2>registered</h2>;
}
