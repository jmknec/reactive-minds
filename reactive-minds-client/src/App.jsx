import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import routes from "./router/router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import logo from "../src/assets/icons-logos/rm-logo.svg";
import icon from "../src/assets/icons-logos/rm-icon.svg";
import ltIcon from "../src/assets/icons-logos/rm-icon-light.svg";
import ltLogo from "../src/assets/icons-logos/rm-logo-light.svg";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  const user = {
    id: 1,
    email: "example@email.com",
    username: "userone",
    role: "parent or caregiver",
  };
  //TO DO: change default state value to null once auth is set up
  const [currentUser, setCurrentUser] = useState(user);

  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Header logo={logo} icon={icon} />
        <Routes>
          <Route path="/profile/:id" element={<ProfilePage />} />
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
