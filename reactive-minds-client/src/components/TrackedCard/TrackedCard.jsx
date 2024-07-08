import "./TrackedCard.scss";
// import { sentenceCase, normalize } from "../../utils/utils";
import UserIcons from "../UserIcons/UserIcons";

export default function TrackedCard(props) {
  const { tool, reactive, regulated, rated, date } = props;

  return (
    <div className="tracking">
      <div className="tracking__details">
        <h3 className="tracking__name">{tool}</h3>
        <p className="tracking__rating">{`${rated} ☆`}</p>
      </div>
      <div className="tracking__container">
        <div className="tracking__text">
          <p>{`Date used: ${date}`}</p>
          <p>{`How you described your child before using ${tool}: ${reactive}`}</p>
          <p>{`How you described your child after using ${tool}: ${regulated}`}</p>
          <p>{`Your rating: ${rated}`}</p>
        </div>
        <div className="tracking__user-icons">
          <UserIcons />
        </div>
      </div>
    </div>
  );
}
