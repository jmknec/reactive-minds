import "./FormInput.scss";

export default function FormInput(props) {
  const { htmlFor, label, id, name, placeholder, onChange, value } = props;

  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className="form-field__input"
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
