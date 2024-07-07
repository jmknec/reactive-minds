import { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./ToolsList.scss";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import HeroBanner from "../HeroBanner/HeroBanner";
import ToolCard from "../ToolCard/ToolCard";

export default function ToolsList() {
  const baseUrl = import.meta.env.VITE_API_URL;
  let location = useLocation().pathname.slice(1);
  // const { currentUser } = useContext(CurrentUserContext);
  const [tools, setTools] = useState([
    {
      id: null,
      name: "",
      effect: "",
      description: "",
      avg_rating: 0,
    },
  ]);
  // const [userTools, setUserTools] = useState([
  //   {
  //     id: null,
  //     name: "",
  //     effect: "",
  //     description: "",
  //     avg_rating: 0,
  //     is_saved: false,
  //   },
  // ]);

  useEffect(() => {
    const getTools = async () => {
      const globalResponse = await axios.get(`${baseUrl}/tools`);
      setTools(globalResponse.data);
    };
    getTools();
  }, []);

  if (location === "grounding" || location === "uplifting") {
    return (
      <main className="page page--tools">
        {location === "grounding" ? (
          <HeroBanner title="Grounding Tools" />
        ) : (
          <HeroBanner title="Tools to Uplift" />
        )}
        <div className="tools">
          {tools
            .filter((tool) => {
              return tool.effect.toLowerCase() == location;
            })
            .map((tool, index) => {
              return (
                <ToolCard
                  key={index}
                  id={tool.id}
                  tool={tool.name}
                  effect={tool.effect}
                  description={tool.description}
                  rating={tool.avg_rating}
                />
              );
            })}
        </div>
      </main>
    );
  }
  return (
    <main className="page page--tools">
      <HeroBanner title="All Tools" />
      <div className="tools">
        <div className="tools__fields">
          <h3 className="tools__field">Name</h3>
          <h3 className="tools__field">Effect</h3>
          <h3 className="tools__field">Description</h3>
          <h3 className="tools__field">Average Rating</h3>
        </div>
        {tools.map((tool, index) => {
          return (
            <ToolCard
              key={index}
              id={tool.id}
              tool={tool.name}
              effect={tool.effect}
              description={tool.description}
              rating={tool.avg_rating}
            />
          );
        })}
      </div>
    </main>
  );
}
