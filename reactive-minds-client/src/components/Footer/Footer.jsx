import Logo from "../Logos/Logos";
import "./Footer.scss";

export default function Footer({ icon, logo }) {
  return (
    <footer className="footer">
      <div className="footer__container">
        <span className="footer__dev">Coded by J Knechtel</span>
        <div className="footer__logo-container">
          <Logo
            logoClass="footer__logo"
            src={logo}
            altText="scribbled illustration of a brain with words 'Reactive Minds'"
          />
          <Logo
            logoClass="footer__icon"
            src={icon}
            altText="scribbled illustration of a brain"
          />
        </div>
      </div>
    </footer>
  );
}
