import "./Strategy.scss";

export default function Strategy(props) {
  const { id, tool, effect, description, state, rating } = props;

  return (
    <div className="strategy">
      <h3 className="strategy__name">{tool}</h3>
      <div className="strategy__">
        <p className="strategy__">{}</p>
        <p className="strategy__">{}</p>
      </div>
    </div>
  );
}
