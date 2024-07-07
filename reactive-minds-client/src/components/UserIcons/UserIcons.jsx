import "./UserIcons.scss";
import bookmark from "../../assets/icons-logos/bookmark.svg";
import track from "../../assets/icons-logos/track.svg";

export default function UserIcons() {
  //TO DO: add onClick to track & save tool
  return (
    <div className="icons">
      <img className="icons__icon icons__icon--" src={track} alt="check mark" />
      <img
        className="icons__icon icons__icon--"
        src={bookmark}
        alt="bookmark outline"
      />
    </div>
  );
}
