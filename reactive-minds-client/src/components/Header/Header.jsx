import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Logo from "../Logos/Logos";

export default function Header({ icon, logo }) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__main-nav">dropdown</nav>
        <div className="header__logo-container">
          <Link className="header__link header__link--dt" to={"/"}>
            {
              <Logo
                logoClass="header__logo"
                src={logo}
                altText="scribbled illustration of a brain with the works 'Reactive Minds'"
              />
            }
          </Link>
          <Link className="header__link header__link--mobile" to={"/"}>
            {
              <Logo
                logoClass="header__icon"
                src={icon}
                altText="scribbled illustration of a brain"
              />
            }
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
      </div>
    </header>
  );
}
