import { useContext, useState } from "react";
import "./ToolCard.scss";
import { sentenceCase, normalize } from "../../utils/utils";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import UserIcons from "../UserIcons/UserIcons";
import TrackToolModal from "../TrackToolModal/TrackToolModal";

export default function ToolCard(props) {
  const { id, tool, effect, description, rating, saved } = props;
  const { currentUser } = useContext(CurrentUserContext);
  const [isOpen, setIsOpen] = useState(false);

  console.log(id, saved);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const groundingSentence = () => {
    return `${sentenceCase(tool)}is a ${normalize(
      effect
    )} technique that can bring balance to a state of high reactivity.`;
  };
  const upliftingSentence = () => {
    return `${sentenceCase(tool)} is an ${normalize(
      effect
    )}, play-based activity that can elevate from a state of low reactivity`;
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
          {currentUser ? (
            <UserIcons saved={saved} toolid={id} toggleModal={toggleModal} />
          ) : null}
        </div>
        <div className="tracking__modal">
          {isOpen && (
            <TrackToolModal
              isOpen={isOpen}
              onClose={toggleModal}
              tool={tool}
              toolid={id}
              effect={effect}
            />
          )}
        </div>
      </div>
    </div>
  );
}
