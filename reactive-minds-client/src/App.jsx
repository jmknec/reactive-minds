import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import routes from "./router/router";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import EmotionStatePage from "./pages/EmotionStatePage/EmotionStatePage";
import StrategiesPage from "./pages/ToolsPage/ToolsPage";
import StrategiesList from "./components/ToolsList/ToolsList";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
import logo from "../src/assets/icons-logos/rm-logo.svg";
import icon from "../src/assets/icons-logos/rm-icon.svg";
import ltIcon from "../src/assets/icons-logos/rm-icon-light.svg";
import ltLogo from "../src/assets/icons-logos/rm-logo-light.svg";

function App() {
  const user = {
    id: 1,
    email: "example@email.com",
    username: "userone",
    role: "parent or caregiver",
  };
  //change default state value to null once auth is set up
  const [currentUser, setCurrentUser] = useState(user);

  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Header logo={logo} icon={icon} />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              route={route.name}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
        <Footer icon={ltIcon} logo={ltLogo} />
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
