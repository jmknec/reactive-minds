import { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./ToolsList.scss";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import HeroBanner from "../HeroBanner/HeroBanner";
import ToolCard from "../ToolCard/ToolCard";

export default function ToolsList() {
  const baseUrl = import.meta.env.VITE_API_URL;
  let location = useLocation().pathname.slice(1);
  const { currentUser } = useContext(CurrentUserContext);
  const userId = currentUser.id;
  const [tools, setTools] = useState([
    {
      id: null,
      name: "",
      effect: "",
      description: "",
      avg_rating: 0,
    },
  ]);
  const [userTools, setUserTools] = useState([
    {
      id: null,
      name: "",
      effect: "",
      description: "",
      avg_rating: 0,
      is_saved: false,
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
    if (currentUser) {
      const getUserTools = async () => {
        const userResponse = await axios.get(
          `${baseUrl}/users/${userId}/tools`
        );
        setUserTools(userResponse.data);
      };
      getUserTools();
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
        {!currentUser ? (
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
        ) : (
          <div className="tools">
            {userTools
              .filter((tool) => {
                return tool.effect.toLowerCase() == location;
              })
              .map((userTool, index) => {
                return (
                  <ToolCard
                    key={index}
                    id={userTool.id}
                    tool={userTool.name}
                    effect={userTool.effect}
                    description={userTool.description}
                    rating={userTool.avg_rating}
                  />
                );
              })}
          </div>
        )}
      </main>
    );
  }
  return (
    <main className="page page--tools">
      <HeroBanner title="All Tools" />
      {!currentUser ? (
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
      ) : (
        <div className="tools">
          {userTools.map((userTool, index) => {
            return (
              <ToolCard
                key={index}
                id={userTool.id}
                tool={userTool.name}
                effect={userTool.effect}
                description={userTool.description}
                rating={userTool.avg_rating}
              />
            );
          })}
        </div>
      )}
    </main>
  );
}
