import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./ToolsList.scss";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import HeroBanner from "../HeroBanner/HeroBanner";
import ToolCard from "../ToolCard/ToolCard";

export default function ToolsList() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const currentUser = useContext(CurrentUserContext);
  const userId = currentUser.id;
  const location = useLocation().pathname.slice(1);
  const [tools, setTools] = useState([
    {
      id: null,
      name: "",
      effect: "",
      description: "",
      avg_rating: 0,
      is_bookmarked: 0,
    },
  ]);

  useEffect(() => {
    if (location === "grounding" || location === "uplifting") {
      if (currentUser) {
        const getSavedEffectTools = async () => {
          const savedEffectResponse = await axios.get(
            `${baseUrl}/users/${userId}/tools/${location}`
          );
          setTools(savedEffectResponse.data);
        };
        getSavedEffectTools();
      }
      const getEffectTools = async () => {
        const effectResponse = await axios.get(
          `${baseUrl}/tools/emotions/${location}`
        );
        setTools(effectResponse.data);
      };
      getEffectTools();
    }
  }, []);

  useEffect(() => {
    if (location === "all-tools") {
      if (currentUser) {
        const getSavedTools = async () => {
          const savedResponse = await axios.get(
            `${baseUrl}/users/${userId}/tools`
          );
          setTools(savedResponse.data);
        };
        getSavedTools();
      }
      const getTools = async () => {
        const globalResponse = await axios.get(`${baseUrl}/tools`);
        setTools(globalResponse.data);
      };
      getTools();
    }
  }, []);

  if (location === "grounding" || location === "uplifting") {
    return (
      <main className="page page--tools">
        {location === "grounding" ? (
          <HeroBanner
            className="page__hero page__hero--grounding"
            title="Grounding Tools"
            titleClass="page__title"
          />
        ) : (
          <HeroBanner
            className="page__hero page__hero--uplifting"
            title="Tools to Uplift"
            titleClass="page__title page__title--uplifting"
          />
        )}
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
                saved={tool.is_bookmarked}
              />
            );
          })}
        </div>
      </main>
    );
  }
  return (
    <main className="page page--tools">
      <HeroBanner
        className="page__hero page__hero--balanced"
        title="All Tools"
        titleClass="page__title"
      />
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
              saved={tool.is_bookmarked}
            />
          );
        })}
      </div>
    </main>
  );
}
