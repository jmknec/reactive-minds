import { Link } from "react-router-dom";
import "./DropdownOption.scss";

export default function DropdownOption(props) {
  const { itemText, itemLink, setOpen } = props;

  return (
    <Link
      className="menu__link"
      to={itemLink}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <li className="menu__option">{itemText}</li>
    </Link>
  );
}
