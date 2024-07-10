import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Logo from "../Logos/Logos";
import Button from "../Button/Button";
import Menu from "../../assets/icons-logos/menu-icon.svg";

export default function Header({ icon, logo }) {
  const user = {
    id: 1,
    email: "example@email.com",
    username: "userone",
    role: "parent or caregiver",
  };
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__site-nav">
          <img
            className="header__menu-icon"
            onClick={() => setOpen(!open)}
            src={Menu}
            alt="Three horizontal lines"
          />
          {open && <DropdownMenu setOpen={setOpen} />}
        </nav>
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
            <Button
              buttonClass="button"
              buttonAction={() => setCurrentUser(null)}
              buttonText="Log Out"
            />
          ) : (
            <Button
              buttonClass="button"
              buttonAction={() => setCurrentUser(user)}
              buttonText="Log In"
            />
          )}
        </div>
      </div>
    </header>
  );
}
