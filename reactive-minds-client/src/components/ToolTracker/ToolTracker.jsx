import { useEffect, useContext, useState } from "react";
import axios from "axios";
import "./ToolTracker.scss";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import TrackedCard from "../TrackedCard/TrackedCard";

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
          <TrackedCard
            key={index}
            tool={trackedTool.name}
            reactive={trackedTool.reactive_state}
            regulated={trackedTool.regulated_state}
            rated={trackedTool.usage_rating}
            date={trackedTool.used_date}
          />
        );
      })}
    </div>
  );
}
