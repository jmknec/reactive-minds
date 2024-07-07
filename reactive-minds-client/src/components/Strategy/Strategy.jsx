import { useContext } from "react";
import "./Strategy.scss";
import { sentenceCase, normalize } from "../../utils/utils";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Strategy(props) {
  const { id, tool, effect, description, state, rating } = props;

  if (effect === "Grounding") {
    return (
      <div className="tool tool--grounding">
        <div className="tool__details tool__details--grounding">
          <h3 className="tool__name tool__name--grounding">{tool}</h3>
          <p className="tool__rating tool__rating--grounding">{`${rating} ☆`}</p>
        </div>
        <div className="tool__container tool__container--grounding">
          <p className="tool__cande tool__cande--grounding">{`${sentenceCase(
            tool
          )} is a ${normalize(
            effect
          )} technique that can bring balance to a state of ${normalize(
            state
          )}.`}</p>
          <p className="tool__description tool__description--grounding">
            {description}
          </p>
        </div>
      </div>
    );
  }
  return;
}
