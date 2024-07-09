import { useState, useContext } from "react";
import axios from "axios";
import "./TrackToolModal.scss";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import FormInput from "../FormInput/FormInput";

export default function TrackToolModal({ isOpen, onClose }) {
  const baseUrl = import.meta.env.VITE_API_URL;
  const { currentUser } = useContext(CurrentUserContext);
  const user_id = currentUser.id;
  const [values, setValues] = useState({
    reactive: "",
    regulated: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onClose();
  };

  return (
    <div className={`modal-container ${isOpen ? "open" : ""}`}>
      <div className="track">
        <h2 className="track__heading">Track Use:</h2>
        <form className="form" onSubmit={handleSubmit}>
          <FormInput
            fieldClass="form__field"
            htmlFor="reactive"
            label="Reactive State"
            id="reactive"
            name="reactive"
            placeholder="How would you describe your child's emotional state before using this tool?"
            onChange={handleChange}
            value={values.reactive}
          />
          <FormInput
            fieldClass="form__field"
            htmlFor="regulated"
            label="Regulated State"
            id="regulated"
            name="regulated"
            placeholder="How would you describe your child's emotional state after using this tool?"
            onChange={handleChange}
            value={values.regulated}
          />
          <FormInput
            fieldClass="form__field"
            htmlFor="rating"
            label="Rating"
            id="rating"
            name="rating"
            placeholder="Please rate how effective this tool was on a scale of 1-5"
            onChange={handleChange}
            value={values.rating}
          />
          <button className="form__track">Submit</button>
        </form>
      </div>
    </div>
  );
}
