import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import HomePage from "./pages/HomePage/HomePage";
import EmotionStatePage from "./pages/EmotionStatePage/EmotionStatePage";
import StrategiesPage from "./pages/StrategiesPage/StrategiesPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

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
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/emotions" element={<EmotionStatePage />}></Route>
          <Route path="/strategies" element={<StrategiesPage />}></Route>
          <Route path="/users/login" element={<LoginPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
