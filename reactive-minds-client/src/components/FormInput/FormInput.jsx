import "./FormInput.scss";

export default function FormInput(props) {
  const {
    htmlFor,
    label,
    id,
    name,
    placeholder,
    onChange,
    value,
    fieldClass,
    inputClass,
  } = props;

  return (
    <div className={fieldClass}>
      <label className="form__label" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className={inputClass}
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
