import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./UserStrategies.scss";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import StrategiesList from "../StrategiesList/StrategiesList";

const baseUrl = import.meta.env.VITE_API_URL;

export default function UserStrategies() {
  const { currentUser } = useContext(CurrentUserContext);
  const userId = currentUser.id;
  const stratUrl = `${baseUrl}/users/${userId}/strategies`;
  const [userStrategies, setUserStrategies] = useState([
    {
      id: null,
      name: "",
      type: "",
      description: "",
      avg_rating: null,
      is_saved: false,
    },
  ]);

  useEffect(() => {
    const getUserStrategies = async () => {
      try {
        const userStratResponse = await axios.get(`${stratUrl}`);
        setUserStrategies(userStratResponse.data);
      } catch (error) {
        console.error("Error fetching user's strategies");
      }
    };
    getUserStrategies();
  }, []);

  return (
    <>
      <StrategiesList userStrategies={userStrategies}></StrategiesList>
    </>
  );
}
