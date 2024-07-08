import { useContext } from "react";
import "./DropdownMenu.scss";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import DropdownOption from "../DropdownOption/DropdownOption";

export default function DropdownMenu({ setOpen }) {
  const { currentUser } = useContext(CurrentUserContext);

  if (currentUser) {
    const userId = currentUser.id;

    return (
      <ul className="menu">
        <DropdownOption
          itemLink="/emotions"
          itemText="Emotion Regulation States"
          setOpen={setOpen}
        />
        <DropdownOption
          itemLink="/tools"
          itemText="Tools for Emotion Regulation"
          setOpen={setOpen}
        />
        <DropdownOption
          itemLink={`/profile/${userId}`}
          itemText="Profile"
          setOpen={setOpen}
        />
      </ul>
    );
  }
  return (
    <ul className="menu">
      <DropdownOption
        itemLink="/emotions"
        itemText="Emotion Regulation States"
        setOpen={setOpen}
      />
      <DropdownOption
        itemLink="/tools"
        itemText="Tools for Emotion Regulation"
        setOpen={setOpen}
      />
    </ul>
  );
}
