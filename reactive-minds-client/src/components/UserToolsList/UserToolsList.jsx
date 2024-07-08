import { useEffect, useContext, useState } from "react";
import axios from "axios";
import "./UserToolsList.scss";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ToolCard from "../ToolCard/ToolCard";

export default function UserToolsList() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const { currentUser } = useContext(CurrentUserContext);
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
    const userId = currentUser.id;

    const getUserTools = async () => {
      const userResponse = await axios.get(`${baseUrl}/users/${userId}/tools`);
      setUserTools(userResponse.data);
    };
    getUserTools();
  }, []);

  return (
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
  );
}
