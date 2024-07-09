import { useState, useContext } from "react";
import axios from "axios";
import "./UserIcons.scss";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import bookmark from "../../assets/icons-logos/bookmark.svg";
import bookmarkFill from "../../assets/icons-logos/bookmarked.svg";
import track from "../../assets/icons-logos/track.svg";

export default function UserIcons({ saved, toolid, toggleModal }) {
  const baseUrl = import.meta.env.VITE_API_URL;
  const { currentUser } = useContext(CurrentUserContext);
  const userId = currentUser.id;
  const [isSaved, setIsSaved] = useState(saved);

  const toggleSave = async (toolid) => {
    try {
      const saveResponse = await axios.post(
        `${baseUrl}/users/${userId}/tools`,
        { tool_id: toolid }
      );
      setIsSaved(!isSaved);
      console.log(saveResponse);
    } catch (error) {
      console.error("Error toggling save:", error);
    }
  };

  //TO DO: add onClick to track & save tool
  return (
    <div className="icons" toolid={toolid}>
      <a onClick={toggleModal}>
        <img
          className="icons__icon icons__icon--"
          src={track}
          alt="check mark"
        />
      </a>
      {isSaved ? (
        <a
          onClick={() => {
            toggleSave(toolid);
          }}
        >
          <img
            className="icons__icon icons__icon--"
            src={bookmark}
            alt="bookmark outline"
          />
        </a>
      ) : (
        <a
          onClick={() => {
            toggleSave(toolid);
          }}
        >
          <img
            className="icons__icon icons__icon--"
            src={bookmarkFill}
            alt="bookmark filled"
          />
        </a>
      )}
    </div>
  );
}
