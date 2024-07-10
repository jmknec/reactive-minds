import "./Button.scss";

export default function Button({
  buttonClass,
  buttonAction,
  buttonType,
  buttonText,
}) {
  return (
    <button className={buttonClass} onClick={buttonAction} type={buttonType}>
      {buttonText}
    </button>
  );
}
