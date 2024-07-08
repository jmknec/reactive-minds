import { useContext } from "react";
import "./ProfilePage.scss";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import UserToolsList from "../../components/UserToolsList/UserToolsList";
import ToolTracker from "../../components/ToolTracker/ToolTracker";

export default function ProfilePage() {
  const { currentUser } = useContext(CurrentUserContext);

  if (currentUser == null) {
    return <h2>403: Unauthorized</h2>;
  }
  return (
    <main className="page page--profile">
      <HeroBanner title={`Welcome back, ${currentUser.username}`} />
      <ToolTracker />
      <UserToolsList />
    </main>
  );
}
