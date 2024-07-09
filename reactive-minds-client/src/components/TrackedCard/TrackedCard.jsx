import "./TrackedCard.scss";
import UserIcons from "../UserIcons/UserIcons";

export default function TrackedCard(props) {
  const { tool, avg, id, saved, count, userAvg } = props;

  return (
    <div className="tracking">
      <div className="tracking__details">
        <h3 className="tracking__name">{tool}</h3>
        <p className="tracking__rating">{`${avg} ☆`}</p>
      </div>
      <div className="tracking__container">
        <div className="tracking__text">
          <p>{`You've tracked use of ${tool} ${count} times and you've rated it ${userAvg}.`}</p>
        </div>
        <div className="tracking__user-icons">
          <UserIcons saved={saved} />
        </div>
      </div>
    </div>
  );
}
