import DropdownOption from "../DropdownOption/DropdownOption";
import "./DropdownMenu.scss";

export default function DropdownMenu({ setOpen }) {
  return (
    <ul className="menu">
      <DropdownOption
        itemLink="/emotions"
        itemText="Emotion Regulation States"
        setOpen={setOpen}
      />
      <DropdownOption
        itemLink="/strategies"
        itemText="Tools for Emotion Regulation"
        setOpen={setOpen}
      />
    </ul>
  );
}
