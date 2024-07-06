import DropdownOption from "../DropdownOption/DropdownOption";
import "./DropdownMenu.scss";

export default function DropdownMenu() {
  return (
    <ul className="menu">
      <DropdownOption
        itemLink="/emotions"
        itemText="Emotion Regulation States"
      />
      <DropdownOption
        itemLink="/strategies"
        itemText="Tools for Emotion Regulation"
      />
    </ul>
  );
}
