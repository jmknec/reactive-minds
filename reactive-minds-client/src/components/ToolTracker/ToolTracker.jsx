import { useEffect, useContext, useState } from "react";
import axios from "axios";
import "./ToolTracker.scss";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ToolCard from "../ToolCard/ToolCard";

export default function ToolTracker() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const { currentUser } = useContext(CurrentUserContext);
  const [trackedTools, setTrackedTools] = useState([]);

  useEffect(() => {
    const userId = currentUser.id;

    const getTrackedTools = async () => {
      const trackedResponse = await axios.get(
        `${baseUrl}/users/${userId}/tracking`
      );
      console.log(trackedResponse.data);
      setTrackedTools(trackedResponse.data);
    };
    getTrackedTools();
  }, []);

  return (
    <div className="tools">
      <h2>Hi there</h2>
      {trackedTools.map((trackedTool, index) => {
        return (
          <div key={index}>
            <p>tool: {trackedTool.name}</p>
            <p>reactive_state: {trackedTool.reactive_state}</p>
            <p>regulated_state: {trackedTool.regulated_state}</p>
            <p>usage_rating: {trackedTool.usage_rating}</p>
            <p>used_date: {trackedTool.used_date}</p>
            <p>is_bookmarked: {trackedTool.is_bookmarked}</p>
          </div>
        );
      })}
    </div>
  );
}
