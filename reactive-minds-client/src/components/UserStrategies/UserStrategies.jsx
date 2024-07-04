import { useContext } from "react";
import "./UserStrategies.scss";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom";

const baseUrl = import.meta.env.VITE_API_URL;

export default function UserStrategies() {
  const { currentUser } = useContext(CurrentUserContext);
  const { userId } = useParams;
  const stratUrl = `${baseUrl}/${userId}/strategies`;

  return (
    <>
      <div></div>
    </>
  );
}
