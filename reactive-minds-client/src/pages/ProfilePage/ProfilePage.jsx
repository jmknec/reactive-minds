import { useContext } from "react";
import "./ProfilePage.scss";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import TrackedToolsList from "../../components/TrackedToolsList/TrackedToolsList";

export default function ProfilePage() {
  const { currentUser } = useContext(CurrentUserContext);

  if (currentUser == null) {
    return <h2>403: Unauthorized</h2>;
  }
  return (
    <main className="page page--profile">
      <HeroBanner
        className="page__hero"
        title={`Welcome back, ${currentUser.username}`}
        titleClass="page__title"
      />
      <TrackedToolsList />
    </main>
  );
}
