import { useContext } from "react";
import "./Header.scss";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";

export default function Header({ logo, logomark }) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <nav className="header__main-nav">dropdown</nav>
      <div className="header__logo-container">
        <Link className="header__link header__link--dt" to={"/"}>
          <img
            className="header__logo"
            src={logo}
            alt="scribbled illustration of a brain with the words 'Reactive Minds"
          />
        </Link>
        <Link className="header__link header__link--mobile" to={"/"}>
          <img
            className="header__logomark"
            src={logomark}
            alt="scribbled illustration of a brain"
          />
        </Link>
      </div>
      <div className="header__button-container">
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
