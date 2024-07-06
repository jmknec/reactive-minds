import "./HeroBanner.scss";

export default function HeroBanner({ title }) {
  return (
    <div className="page__hero">
      <div className="page__title-container">
        <h1 className="page__title">{title}</h1>
      </div>
    </div>
  );
}
