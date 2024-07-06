import "./Logos.scss";

export default function Logo({ logoClass, src, altText }) {
  return <img className={logoClass} src={src} alt={altText} />;
}
