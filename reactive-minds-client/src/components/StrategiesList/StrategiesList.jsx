import { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./StrategiesList.scss";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import HeroBanner from "../HeroBanner/HeroBanner";
import StrategyCard from "../StrategyCard/StrategyCard";

export default function StrategiesList() {
  const baseUrl = import.meta.env.VITE_API_URL;
  let location = useLocation().pathname.slice(1);
  // console.log(location);
  // const { currentUser } = useContext(CurrentUserContext);
  const [strategies, setStrategies] = useState([
    {
      id: null,
      name: "",
      effect: "",
      description: "",
      emotional_state: "",
      avg_rating: 0,
    },
  ]);
  // const [userStrategies, setUserStrategies] = useState([
  //   {
  //     id: null,
  //     name: "",
  //     effect: "",
  //     description: "",
  //     emotional_state: "",
  //     avg_rating: 0,
  //     is_saved: false,
  //   },
  // ]);

  useEffect(() => {
    const getStrategies = async () => {
      const globalResponse = await axios.get(`${baseUrl}/strategies`);
      setStrategies(globalResponse.data);
    };
    getStrategies();
  }, []);

  if (location === "grounding" || location === "uplifting") {
    return (
      <main className="page page--tools">
        {location === "grounding" ? (
          <HeroBanner title="Grounding Tools" />
        ) : (
          <HeroBanner title="Tools to Uplift" />
        )}
        <div className="strategies">
          {strategies
            .filter((strategy) => {
              return strategy.effect.toLowerCase() == location;
            })
            .map((strategy, index) => {
              return (
                <StrategyCard
                  key={index}
                  id={strategy.id}
                  tool={strategy.name}
                  effect={strategy.effect}
                  description={strategy.description}
                  state={strategy.emotional_state}
                  rating={strategy.avg_rating}
                />
              );
            })}
        </div>
      </main>
    );
  }
  return (
    <main className="page page--tools">
      <HeroBanner title="All Strategies" />
      <div className="strategies">
        <div className="strategies__fields">
          <h3 className="strategies__field">Name</h3>
          <h3 className="strategies__field">Effect</h3>
          <h3 className="strategies__field">Description</h3>
          <h3 className="strategies__field">Average Rating</h3>
        </div>
        {strategies.map((strategy, index) => {
          return (
            <StrategyCard
              key={index}
              id={strategy.id}
              tool={strategy.name}
              effect={strategy.effect}
              description={strategy.description}
              state={strategy.emotional_state}
              rating={strategy.avg_rating}
            />
          );
        })}
      </div>
    </main>
  );
}
