import { useContext } from "react";
import "./Header.scss";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <Link className="header__link" to={"/"}>
        <h2 className="header__name">Reactive Minds</h2>
      </Link>
      <div className="header__actions">
        <ul className="header__links">
          <li className="header__link">Emotions</li>
          <li className="header__link">Strategies</li>
        </ul>
        {currentUser ? (
          <button
            className="header__button"
            onClick={() => setCurrentUser(null)}
          >
            Log Out
          </button>
        ) : (
          <button className="header__button">Log In</button>
        )}
      </div>
    </header>
  );
}
