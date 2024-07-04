import { useContext } from "react";
import "./ProfilePage.scss";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import UserStrategies from "../../components/UserStrategies/UserStrategies";

export default function ProfilePage() {
  const { currentUser } = useContext(CurrentUserContext);

  if (currentUser == null) {
    return <h2>403: Unauthorized</h2>;
  }
  return (
    <>
      <h2>{`Welcome, ${currentUser.username}`}</h2>
      <UserStrategies></UserStrategies>
    </>
  );
}
