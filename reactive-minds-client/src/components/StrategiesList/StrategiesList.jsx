import { useEffect, useContext, useState } from "react";
import axios from "axios";
import "./StrategiesList.scss";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Strategy from "../Strategy/Strategy";

export default function StrategiesList() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const { currentUser } = useContext(CurrentUserContext);
  const [strategies, setStrategies] = useState([
    {
      id: null,
      name: "",
      type: "",
      description: "",
      emotional_state: "",
      avg_rating: 0,
    },
  ]);
  const [userStrategies, setUserStrategies] = useState([
    {
      id: null,
      name: "",
      type: "",
      description: "",
      emotional_state: "",
      avg_rating: 0,
      is_saved: false,
    },
  ]);

  useEffect(() => {
    const getStrategies = async () => {
      const globalResponse = await axios.get(`${baseUrl}/strategies`);
      setStrategies(globalResponse.data);
    };
    getStrategies();
  }, []);

  return (
    <div className="strategies">
      <h2 className="strategies__title">Global Strategies</h2>
      <div className="strategies__fields">
        <h3 className="strategies__field">Tool</h3>
        <h3 className="strategies__field">Effect</h3>
        <h3 className="strategies__field">Description</h3>
        <h3 className="strategies__field">Average Rating</h3>
      </div>
      {strategies.map((strategy, index) => {
        return (
          <Strategy
            key={index}
            id={strategy.id}
            tool={strategy.name}
            effect={strategy.type}
            description={strategy.description}
            state={strategy.emotional_state}
            rating={strategy.avg_rating}
          />
        );
      })}
    </div>
  );
}
