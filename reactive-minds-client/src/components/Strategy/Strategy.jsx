import "./Strategy.scss";

export default function Strategy({ strategy }) {
  return (
    <div className="strategy">
      <h2>{strategy.name}</h2>
      <p>{strategy.type}</p>
      <p>{strategy.description}</p>
    </div>
  );
}
