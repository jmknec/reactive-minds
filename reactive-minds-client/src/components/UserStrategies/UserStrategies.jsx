import { useContext } from "react";
import axios from "axios";
import "./UserStrategies.scss";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const baseUrl = import.meta.env.VITE_API_URL;

export default function UserStrategies() {
  const { currentUser } = useContext(CurrentUserContext);
  const userId = currentUser.id;
  const stratUrl = `${baseUrl}/users/${userId}/strategies`;

  useEffect(() => {
    const getUserStrategies = async () => {
      try {
        const userStratResponse = await axios.get(`${stratUrl}`);
        console.log(userStratResponse.data);
      } catch (error) {
        console.error("Error fetching user's strategies");
      }
    };
    getUserStrategies();
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}
