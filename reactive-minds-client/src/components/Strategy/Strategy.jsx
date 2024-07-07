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

  if (effect === "Grounding") {
    return (
      <div className="tool tool--grounding">
        <div className="tool__details tool__details--grounding">
          <h3 className="tool__name tool__name--grounding">{tool}</h3>
          <p className="tool__rating tool__rating--grounding">{`${rating} ☆`}</p>
        </div>
        <div className="tool__container tool__container--grounding">
          <div className="tool__text tool__text--grounding">
            <p className="tool__cande tool__cande--grounding">
              {groundingSentence()}
            </p>
            <p className="tool__description tool__description--grounding">
              {description}
            </p>
          </div>
          <div className="tool__user-icons tool__user-icons--">
            {currentUser ? <UserIcons /> : null}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="tool tool--grounding">
      <div className="tool__details tool__details--grounding">
        <h3 className="tool__name tool__name--grounding">{tool}</h3>
        <p className="tool__rating tool__rating--grounding">{`${rating} ☆`}</p>
      </div>
      <div className="tool__container tool__container--grounding">
        <div className="tool__text tool__text--grounding">
          <p className="tool__cande tool__cande--grounding">
            {upliftingSentence()}
          </p>
          <p className="tool__description tool__description--grounding">
            {description}
          </p>
        </div>
        <div className="tool__user-icons tool__user-icons--">
          {currentUser ? <UserIcons /> : null}
        </div>
      </div>
    </div>
  );
}
