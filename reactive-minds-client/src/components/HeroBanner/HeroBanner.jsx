import "./HeroBanner.scss";

export default function HeroBanner({ title, className, titleClass }) {
  return (
    <div className={className}>
      <div className="page__title-container">
        <h1 className={titleClass}>{title}</h1>
      </div>
    </div>
  );
}
