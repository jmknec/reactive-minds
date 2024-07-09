import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./ToolsList.scss";
import HeroBanner from "../HeroBanner/HeroBanner";
import ToolCard from "../ToolCard/ToolCard";

export default function ToolsList() {
  const baseUrl = import.meta.env.VITE_API_URL;
  let location = useLocation().pathname.slice(1);
  const [tools, setTools] = useState([
    {
      id: null,
      name: "",
      effect: "",
      description: "",
      avg_rating: 0,
    },
  ]);

  useEffect(() => {
    const getTools = async () => {
      const globalResponse = await axios.get(`${baseUrl}/tools`);
      setTools(globalResponse.data);
    };
    getTools();
  }, []);

  useEffect(() => {
    if (location === "grounding" || location === "uplifting") {
      const getEffectTools = async () => {
        const effectResponse = await axios.get(
          `${baseUrl}/tools/emotions/${location}`
        );
        setTools(effectResponse.data);
      };
      getEffectTools();
    }
  }, []);

  if (location === "grounding" || location === "uplifting") {
    return (
      <main className="page page--tools">
        {location === "grounding" ? (
          <HeroBanner title="Grounding Tools" />
        ) : (
          <HeroBanner title="Tools to Uplift" />
        )}
        {/* {!currentUser ? ( */}
        <div className="tools">
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
  return (
    <main className="page page--tools">
      <HeroBanner title="All Tools" />
      <div className="tools">
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
