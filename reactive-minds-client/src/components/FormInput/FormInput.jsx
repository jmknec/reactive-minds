import "./FormInput.scss";

export default function FormInput(props) {
  const { htmlFor, label, id, name, placeholder, onChange, value, fieldClass } =
    props;

  return (
    <div className={fieldClass}>
      <label className="form__label" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className="form__input"
        id={id}
        name={name}
        effect="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
