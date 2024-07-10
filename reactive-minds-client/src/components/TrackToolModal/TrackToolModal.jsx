import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./TrackToolModal.scss";
import FormInput from "../FormInput/FormInput";

export default function TrackToolModal({ isOpen, onClose, toolid }) {
  const baseUrl = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const [values, setValues] = useState({
    reactive_state: "",
    regulated_state: "",
    usage_rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toolId = toolid;
    const { reactive_state, regulated_state, usage_rating } = values;
    const data = {
      reactive_state,
      regulated_state,
      usage_rating,
    };

    try {
      await axios.post(`${baseUrl}/users/${id}/tracking/${toolId}`, data);
      console.log("Tracking data submitted: ", data);
    } catch (error) {
      console.error("Error adding tool usage data:", error);
    }

    onClose();
  };

  return (
    <div className={`tracking-modal ${isOpen ? "open" : ""}`}>
      <div className="tracking-modal__container">
        <h2 className="tracking-modal__heading">Track Use:</h2>
        <form className="form" onSubmit={handleSubmit}>
          <FormInput
            fieldClass="form__field"
            inputClass={`form__input`}
            htmlFor="reactive_state"
            label="Reactive State"
            id="reactive_state"
            name="reactive_state"
            placeholder="How would you describe your child's emotional state before using this tool?"
            onChange={handleChange}
            value={values.reactive_state}
          />
          <FormInput
            fieldClass="form__field"
            inputClass={`form__input`}
            htmlFor="regulated_state"
            label="Regulated State"
            id="regulated_state"
            name="regulated_state"
            placeholder="How would you describe your child's emotional state after using this tool?"
            onChange={handleChange}
            value={values.regulated_state}
          />
          <FormInput
            fieldClass="form__field"
            inputClass={`form__input`}
            htmlFor="usage_rating"
            label="Rating"
            id="usage_rating"
            name="usage_rating"
            placeholder="Please rate how effective this tool was on a scale of 1-5"
            onChange={handleChange}
            value={values.usage_rating}
          />
          <button className="form__track">Submit</button>
        </form>
      </div>
    </div>
  );
}
