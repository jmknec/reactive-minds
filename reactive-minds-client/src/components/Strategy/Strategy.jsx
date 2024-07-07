import { useContext } from "react";
import "./Strategy.scss";
import { sentenceCase, normalize } from "../../utils/utils";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import UserIcons from "../UserIcons/UserIcons";

export default function Strategy(props) {
  const { id, tool, effect, description, state, rating } = props;
  const { currentUser } = useContext(CurrentUserContext);
  const groundingSentence = () => {
    return `${sentenceCase(tool)}is a ${normalize(
      effect
    )} technique that can bring balance to a state of ${normalize(state)}.`;
  };
  const upliftingSentence = () => {
    return `${sentenceCase(tool)} is an ${normalize(
      effect
    )}, play-based activity that can elevate from a state of ${normalize(
      state
    )}`;
  };

  return (
    <div className="tool">
      <div className="tool__details">
        <h3 className="tool__name">{tool}</h3>
        <p className="tool__rating">{`${rating} ☆`}</p>
      </div>
      <div className="tool__container">
        <div className="tool__text">
          {effect === "Grounding" ? (
            <p className="tool__cande">{groundingSentence()}</p>
          ) : (
            <p className="tool__cande">{upliftingSentence()}</p>
          )}
          <p className="tool__description">{description}</p>
        </div>
        <div className="tool__user-icons">
          {currentUser ? <UserIcons /> : null}
        </div>
      </div>
    </div>
  );
}
