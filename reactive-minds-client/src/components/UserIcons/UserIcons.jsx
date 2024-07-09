import "./UserIcons.scss";
import bookmark from "../../assets/icons-logos/bookmark.svg";
import bookmarkFill from "../../assets/icons-logos/bookmarked.svg";
import track from "../../assets/icons-logos/track.svg";

export default function UserIcons({ saved }) {
  //TO DO: add onClick to track & save tool
  console.log(saved);
  return (
    <div className="icons">
      <img className="icons__icon icons__icon--" src={track} alt="check mark" />
      {saved ? (
        <img
          className="icons__icon icons__icon--"
          src={bookmark}
          alt="bookmark outline"
        />
      ) : (
        <img
          className="icons__icon icons__icon--"
          src={bookmarkFill}
          alt="bookmark filled"
        />
      )}
    </div>
  );
}
