import "./Footer.scss";

export default function Footer({ icon, logo }) {
  return (
    <footer className="footer">
      <div className="footer__">
        <img className="footer__icon" src={icon} alt="" />
        <img className="footer__logo" src={logo} alt="" />
      </div>
    </footer>
  );
}
