import { useEffect, useContext, useState } from "react";
import axios from "axios";
import "./TrackedToolsList.scss";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import TrackedCard from "../TrackedCard/TrackedCard";

export default function TrackedToolsList() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const { currentUser } = useContext(CurrentUserContext);
  const [trackedTools, setTrackedTools] = useState([]);

  useEffect(() => {
    const userId = currentUser.id;

    const getTrackedTools = async () => {
      const trackedResponse = await axios.get(
        `${baseUrl}/users/${userId}/tracking`
      );
      setTrackedTools(trackedResponse.data);
    };
    getTrackedTools();
  }, []);

  return (
    <div className="tools">
      {trackedTools.map((trackedTool, index) => {
        return (
          <TrackedCard
            key={index}
            tool={trackedTool.name}
            id={trackedTool.tool_id}
            effect={trackedTool.effect}
            avg={trackedTool.avg_rating}
            saved={trackedTool.is_bookmarked}
            count={trackedTool.track_count}
            userAvg={trackedTool.user_avg}
          />
        );
      })}
    </div>
  );
}
